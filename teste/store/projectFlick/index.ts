export type Project = {
    name: string;
    path: string;
}

export const projectFlick = () => {
    return {    
        loading: false,
        projects: [] as Project[],
    }
}