import { Style } from "../Stylesheet/types";
import FlickComponent from "./FlickComponent";


type ContainerProps = Style & {
    tag?: "div" | "span" | "p" | "section" | "article" | "main" | "aside" | "header" | "footer" | "nav" | "form",
    className?: string | string[];
    children: HTMLElement[],
    style?: Style;
}

const cardStyle: Style = {
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    borderRadius: "8px",
    backgroundColor: "white"
}

class ContainerComponent extends FlickComponent {
    constructor({ tag, style, children, className, ...props }: ContainerProps) {
        super(tag);

        this.setStyle({ ...cardStyle, ...style, ...props });
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