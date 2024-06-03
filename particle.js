export default class particle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.x = Math.floor(Math.random() * this.width);
        this.y = Math.floor(Math.random() * this.height);
    }

    init(context) {
        context.fillRect(this.x, this.y, 2, 2);
    }
    line(context) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        this.x += Math.random();
        this.y += Math.random();
        context.lineTo(this.x, this.y);
        context.stroke();
    }
}