export type User = {
    name: string;
    email: string;
}

export const loginFlick = () => {
    return {    
        auth: {
            login: {
                loading: false,
                email: '',
                password: ''
            },
            user: null as User | null,
        }    
    }
}