import { CssRenderer } from "./CssRenderer";

export class Renderer {
    constructor() {
        this.cssRenderer = new CssRenderer();
    }

    render() {
        this.cssRenderer.render();
    }
}