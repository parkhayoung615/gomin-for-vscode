export class CssRenderer {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        };
        this.imageURL = "";
    }

    render() {
        const css = `
            background-image: url("${this.imageURL}");
            background-position: ${this.position.x} ${this.position.y};
        `;

        this.setCss(css);
    }

    setCss(css) {

    }

    /**
     * image url을 변경한다.
     * @param {String} url 
     */
    changeImageURL(url) {
        this.imageURL = url
    }

    /**
     * 이미지의 좌표를 변경한다.
     * @param {number} x 
     * @param {number} y 
     */
    changePosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
}