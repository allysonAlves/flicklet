import { Style } from "../Stylesheet/types";
import FlickComponent from "./FlickComponent";

type ContextCallback = (state: string | number) => void;

type ContextListener = (callback: ContextCallback) => void;

type LabelProps = {
    tag?: "p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5",
    text: string | ContextListener;
    style?: Style;
    className?: string | string[];
}

class LabelComponent extends FlickComponent {
    constructor({ tag, text, style, className }: LabelProps) {
        super(tag);

        if (typeof text === 'string') {
            this.textContent(text);
        } else {
            text(this.textContent)
        }

        this.setStyle(style);

        if (className) {
            if (Array.isArray(className)) {
                className.forEach(className => {
                    this.component.classList.add(className);
                });
            } else {
                this.component.classList.add(className);
            }
        }
    }
}

const Label = (props: LabelProps) => {
    return new LabelComponent(props).render();
}

export default Label;