import { CssRenderer } from "./CssRenderer";

export class Renderer {
    private cssRenderer: CssRenderer;

    constructor() {
        this.cssRenderer = new CssRenderer();
    }

    render() {
        this.cssRenderer.render();
    }
}