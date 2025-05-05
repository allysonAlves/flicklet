export const createPathObjectProxy = <T extends object>(obj: T, path: string = ''): T => {
    return new Proxy(obj, {
        get(target: T, prop: string | symbol) {
            const newPath = path ? `${path}.${String(prop)}` : String(prop);

            if (typeof prop === 'string' && prop in target) {
                const value = target[prop as keyof T];

                if (typeof value === 'object' && value !== null) {
                    return {
                        ...createPathObjectProxy(value as object, newPath),
                        eventKey: newPath
                    };
                }

                return {
                    eventKey: newPath,
                    value
                };
            }

            return undefined;
        }
    });
};