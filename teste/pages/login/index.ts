import { Button, Container, Form, Input, Label } from "../../../dist";
import { appState } from "../../store/hooks";

import './styles.scss';

export default function Login() {
    const email = appState((state) => state.login.auth.login.email);     
    const password = appState((state) => state.login.auth.login.password);
    const loading = appState((state) => state.login.auth.login.loading);
    
    const user = appState((state) => state.login.auth.user); 


    const handleLogin = async () => {
        loading.set(true);                            
        await new Promise(resolve => setTimeout(resolve, 2000));                                                         
        user.set({name: password.get(), email: email.get()});
        loading.set(false);
    }

    return Container({
        className: 'container',
        children: [
            Container({
                className: 'card',
                children: [
                    Label({text: "Login", className: 'title'}),
                    Form({  
                        onSubmit: event => {
                            console.log(event.fields['email'].value);
                        },                       
                        className: 'inputContainer',
                        children: [ 
                            Input({name: "email" ,placeholder: "E-mail", onChange: (ev) => email.set(ev.target?.value)}),
                            Button({
                                className: 'button-submit',
                                child: (callback) => {
                                    loading.trigger(isLoading => callback(isLoading ? "Loading..." : "Login"))
                                }, 
                                type: "submit"
                                //onClick: handleLogin
                            })
                        ]
                    }),
                ]
            })
        ]
    })
}