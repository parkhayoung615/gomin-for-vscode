import { Position } from "../structure/Position";

export class CssRenderer {
    private position: Position;
    private imageURL: string;

    constructor() {
        this.position = new Position(0, 0);
        this.imageURL = "";
    }

    render() {
        const css = `
            background-image: url("${this.imageURL}");
            background-position: ${this.position.x} ${this.position.y};
        `;

        this.setCss(css);
    }

    setCss(css: string) {

    }

    /**
     * image url을 변경한다.
     * @param {String} url 
     */
    changeImageURL(url: string) {
        this.imageURL = url;
    }

    /**
     * 이미지의 좌표를 변경한다.
     * @param {number} x 
     * @param {number} y 
     */
    changePosition(x:number, y:number) {
        this.position.x = x;
        this.position.y = y;
    }
}