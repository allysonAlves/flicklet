import { GlobalState } from "../../dist";
import { loginFlick } from "./loginFlick";
import { projectFlick } from "./projectFlick";

const initialState = {
    login: loginFlick(),
    project: projectFlick()
}


export const store = GlobalState.createState(initialState);    


export type RootState = ReturnType<typeof store.getState>;