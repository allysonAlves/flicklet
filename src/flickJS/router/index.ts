type Route = {
    path: string;
    component: (route: Route) => HTMLElement;
    state?: { [key: string]: any },
    config?: { [key: string]: any }
};

type CreateBrowser = {
    rootElement?: HTMLElement;
    routes: Route[],
}

export class Router {
    private static routes: Route[] = [];
    private static browserComponent: HTMLElement = document.body;
    public static currentRoute: Route;
    private static listeners: Array<(route: Route) => void> = [];

    static create({
        routes,
        rootElement
    }: CreateBrowser) {
        if (rootElement) {
            Router.browserComponent = rootElement;
        }

        Router.routes = routes;
        window.removeEventListener("popstate", Router.renderComponent);
        window.addEventListener("popstate", Router.renderComponent);
        Router.renderComponent();
        return rootElement;
    }

    static navigate(path: string, replace?: boolean) {
        if (replace) {
            window.history.replaceState({}, "", path);
        } else {
            window.history.pushState({}, "", path);
        }

        Router.renderComponent();
    }

    private static matchRoute(path: string, routePath: string): boolean {
        const regex = new RegExp(
            "^" +
            routePath
                .replace('*', '.*')
                .replace(/:(\w+)/g, "(.+)")
            +
            "$"
        );
        return regex.test(path);
    }

    private static getRoutePath(path: string): Route | null | undefined {
        return Router.routes.find(route => Router.matchRoute(path, route.path));

    }

    private static renderComponent() {
        const path = window.location.pathname;
        const route = Router.getRoutePath(path);

        Router.browserComponent.innerHTML = "";

        if (route) {
            Router.currentRoute = route;
            Router.browserComponent.appendChild(route.component(route));
        } else {
            const notFound = document.createElement("div");
            notFound.textContent = "404 - Página não encontrada";
            Router.browserComponent.appendChild(notFound);
        }

        Router.listeners.forEach(fn => fn(Router.currentRoute));
    }

    static onRouteChange(fn: (route: Route) => void) {
        Router.listeners.push(fn);
    }
}
