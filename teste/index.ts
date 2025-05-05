import Flick from "../dist/index";
import { App } from "./App";
import { store } from "./store";
import './index.scss';

(() => ({store}));

Flick.registerApp(App());


