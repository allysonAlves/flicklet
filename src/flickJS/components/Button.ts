import { Style } from "../Stylesheet/types";
import FlickComponent from "./FlickComponent";

type ContextCallback = (state: string | HTMLElement) => void;

type ContextListener = (callback: ContextCallback) => void;

type ButtonProps = Omit<Partial<HTMLButtonElement>, 'children'> & {
    tag?: "p" | "div" | "span",
    child: HTMLElement | string | ContextListener;
    style?: Style;
    onClick?: () => void;
    className?: string | string[];
}

class ButtonComponent extends FlickComponent {
    constructor({ tag, child, style, onClick, className, ...props }: ButtonProps) {
        super(tag || "button");

        Object.assign(this.component, props);

        if (typeof child === 'function') {
            child(this.setContent);
        } else {
            this.setContent(child);
        }

        this.setStyle(style);

        if (onClick) {
            this.component.addEventListener("click", onClick);
        }

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

    setContent = (content: string | HTMLElement) => {
        if (typeof content === 'string') {
            this.textContent(content);
        } else if (content instanceof HTMLElement) {
            this.component.appendChild(content);
        }
    }
}

const Button = (props: ButtonProps) => {
    return new ButtonComponent(props).render();
}

export default Button;