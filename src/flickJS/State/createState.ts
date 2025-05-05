import { State } from "./state";

type CreateState<T, C extends Record<string, (state: T, props: any) => T>> = {
    initialState: T;
    actions: C;
};

export const createState = <T, C extends Record<string, (state: T, props: any) => T>>(
    { initialState, actions }: CreateState<T, C>
) => {
    const state = State(initialState);

    let stateActions = {} as { [K in keyof C]: (props: Parameters<C[K]>[1]) => T };

    Object.keys(actions).forEach((action) => {
        const key = action as keyof C;
        stateActions[key] = (props: Parameters<C[typeof key]>[1]) => {
            const newState = actions[key](state.getState(), props);
            state.setState(newState);
            return newState;
        };
    });

    return {
        watch: state.watch,
        trigger: state.trigger,
        getState: state.getState,
        actions: stateActions
    };
};

export type InferRootState<T> = {
    [K in keyof T]: T[K] extends { state: { getState: () => infer S } } ? S : never;
};