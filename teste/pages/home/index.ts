import { Button, Card, Container, Label } from "../../../dist"
import { appState } from "../../store/hooks";

type HomeProps = {
    user: {
        email: string;
        name: string;
    }
}

export const Home = () => {   

    const loading = appState(state => state.project.loading);

    const handleLogout = () => {
        loading.set(false);    
        loading.get() 
    }

    return Container({
        display: "flex",        
        height: "100vh",    
        children: [
            Card({ 
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",  
                padding: "16px",  
                height: "25px", 
                gap: "15px",       
                children: [
                    Label({
                        text: "Home",                        
                    }),
                    Label({
                        text: "Projetos",                        
                    }),
                    Label({
                        text: "Sobre",                        
                    }),                   
                ]
            }),  
            Label({
                text: loading.trigger,                        
            }),          
        ]
    })
}