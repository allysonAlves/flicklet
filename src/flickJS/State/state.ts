class Store<T> {
    private state: T;
    private subscriptions: Array<() => void> = [];

    constructor(state: T) {
        this.state = state;
    }

    setState = (state: T | ((prevState: T) => T)) => {
        let newState: T;

        if (typeof state === 'function') {
            newState = (state as (prevState: T) => T)(this.state);
        } else {
            newState = state;
        }

        this.state = newState;
        this.subscriptions.forEach(fn => fn());
    }

    getState = () => {
        return this.state;
    }

    subscribe = (fn: () => void) => {
        this.subscriptions.push(fn);
    }
}

export const State = <T>(initialState: T) => {
    let instance = new Store(initialState);

    const trigger = (set: (state: T) => void) => {
        let currentState = instance.getState();

        set(currentState);

        instance.subscribe(() => {
            const nextState = instance.getState();
            if (currentState !== nextState) {
                currentState = nextState;
                set(nextState);
            }
        });
    };

    function watch<C>(getState: (state: T) => C) {
        let currentWatchState = {} as C;
        return (set: (value: C) => void) => {
            trigger((state) => {
                const newWatchState = getState(state);
                if (currentWatchState !== newWatchState) {
                    currentWatchState = newWatchState;
                    set(newWatchState);
                }
            });
        };
    }

    return {
        setState: instance.setState,
        getState: instance.getState,
        watch,
        trigger,
    }
}