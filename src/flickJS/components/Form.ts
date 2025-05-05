import FlickComponent from "./FlickComponent";

type FlickInput = {
    fields: {[key: string]: HTMLInputElement}
}

type FormProps = Omit<Partial<HTMLFormElement>, 'children'> & {
  onSubmit?: (inputs: SubmitEvent & FlickInput) => void;
  children: HTMLElement[];
  className?: string | string[];
};

// Componente do formulário
class FormComponent<T extends { name: string }[]> extends FlickComponent {
  constructor({ children, onSubmit, className, ...props }: FormProps) {
    super('form');

    Object.assign(this.component, props);

    // Filtra apenas inputs
    const inputs = children.filter(
      (item): item is HTMLInputElement => item instanceof HTMLInputElement
    );
    
    this.component.onsubmit = (event) => {
      event.preventDefault();
      
      if (onSubmit) {
       
        const inputValues = inputs.reduce((acc, input) => {
          acc[input.name] = input;
          return acc;
        }, {} as {[key: string]: HTMLInputElement});

        onSubmit({...event, fields: inputValues});
      }
    };

    this.renderChildren(children as any);

    // Configura classes
    if (className) {
      if (Array.isArray(className)) {
        className.forEach((className) => {
          this.component.classList.add(className);
        });
      } else {
        this.component.classList.add(className);
      }
    }
  }

  renderChildren = (children: HTMLElement[]) => {
    children.forEach((child) => {
      this.component.appendChild(child);
    });
  };
}

// Função de criação do formulário
const Form = <T extends { name: string }[]>(props: FormProps) => {
  return new FormComponent<T>(props).render();
};

export default Form;
