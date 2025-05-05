import { Style } from "../Stylesheet/types";
import FlickComponent from "./FlickComponent";

type ContainerProps = Style & {
    tag?: "div" | "span" | "p" | "section" | "article" | "main" | "aside" | "header" | "footer" | "nav" | "form",
    className?: string | string[];
    children: HTMLElement[],
    style?: Style;
}

class ContainerComponent extends FlickComponent {
    constructor({ tag, style, children, className, ...props }: ContainerProps) {
        super(tag);

        this.setStyle({ ...style, ...props });
        this.renderChildren(children);
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
        children.forEach(child => {
            this.component.appendChild(child);
        });
    }
}

const Container = (props: ContainerProps) => {
    return new ContainerComponent(props).render();
}

export default Container;