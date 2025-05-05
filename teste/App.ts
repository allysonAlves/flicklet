import { Watcher } from "../dist";
import { Home } from "./pages/home";
import Login from "./pages/login";
import { appState } from "./store/hooks";
import { User } from "./store/loginFlick";

export const App = () => {
    const user = appState((state) => state.login.auth.user);  

    return Watcher({
        children: (user: null | User) => [
            !user ? Login() : Home()
        ],
        trigger: user.trigger
    })
}