export function registerApp(app?: HTMLElement | null) {
    if (app) {
        window.document.body.innerHTML = '';
        document.body.appendChild(app);
    }
}