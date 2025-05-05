import { Style } from "../Stylesheet/types";
import FlickComponent from "./FlickComponent";

type ContextCallback = (state: string) => void;

type ContextListener = (callback: ContextCallback) => void;

type InputProps = Partial<HTMLInputElement> & {
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "range",
    placeholder?: string,
    value?: string | ContextListener | any;
    style?: Style;
    onChange?: (ev: InputEvent & { target: HTMLInputElement }) => void;
    className?: string | string[];
}

class InputComponent extends FlickComponent {
    constructor({ value, style, onChange, className, ...props }: InputProps) {
        super("input");

        Object.assign(this.component, props);

        if (typeof value === 'string') {
            if (this.component instanceof HTMLInputElement) {
                this.component.value = value;
            } else {
                this.textContent(value);
            }
        } else if (typeof value === 'function') {
            value((state: any) => {
                if (this.component instanceof HTMLInputElement) {
                    this.component.value = state;
                } else {
                    this.textContent(state);
                }
            });
        }

        if (onChange) {
            this.component.addEventListener("input", ((ev: Event) => {
                onChange(ev as InputEvent & { target: HTMLInputElement });
            }) as EventListener);
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

const Input = (props: InputProps) => {
    return new InputComponent(props).render() as HTMLInputElement;
}

export default Input;