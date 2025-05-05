export const getDefaultIndexTS = () => `import Flick from "flickjs";
import './index.scss';

const App = () => {
    return Label({ text: "Hello World" }); 
};

Flick.registerApp(App());`
