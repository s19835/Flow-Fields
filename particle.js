export default class particle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    init(context) {
        let x = Math.floor(Math.random() * this.width);
        let y = Math.floor(Math.random() * this.height);
        context.fillRect(x, y, 2, 2);
    }
}