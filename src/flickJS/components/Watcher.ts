import { Style } from "../Stylesheet/types";
import FlickComponent from "./FlickComponent";

type ContextListener<T> = (callback: (state: T) => void) => void;

type ContainerProps<T> = Style & {
    tag?: "div" | "span" | "p" | "section" | "article" | "main" | "aside" | "header" | "footer" | "nav" | "form",
    className?: string | string[];
    trigger: ContextListener<T>;
    children: (state: T) => HTMLElement[];
    style?: Style;
}


export class WatcherComponent<T> extends FlickComponent {
    constructor({ tag, style, children, trigger, className, ...props }: ContainerProps<T>) {
        super(tag);

        this.setStyle({ ...style, ...props });


        trigger((state) => {
            const childrensWithState = children(state);
            this.renderChildren(childrensWithState);
        })

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

    renderChildren = (children: HTMLElement[]) => {
        this.component.innerHTML = '';
        children.forEach(child => {
            this.component.appendChild(child);
        });
    }
}

const Watcher = <T>(props: ContainerProps<T>) => {
    return new WatcherComponent(props).render();
}

export default Watcher;