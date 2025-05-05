export default class FlickComponent {
    component: HTMLElement | HTMLInputElement | HTMLFormElement;

    constructor(tag?: string) {
        this.component = document.createElement(tag || 'div');
    }

    render = () => {
        return this.component;
    }

    textContent = (text: string | number) => {
        this.component.textContent = String(text || '');
    }

    setStyle = (style?: CSSStyleDeclaration | {}) => {
        Object.assign(this.component.style, style || {});
    }

    setChildren = (...children: HTMLElement[]) => {
        this.component.innerHTML = "";
        this.component.append(...children)
    }
}