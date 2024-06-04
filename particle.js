export default class particle {
    constructor(width, height, context, particleSize) {
        this.width = width;
        this.height = height;
        this.x = Math.floor(Math.random() * this.width);
        this.y = Math.floor(Math.random() * this.height);
        this.context= context;
        this.particleSize = particleSize;
    }

    init() {
        this.context.fillRect(this.x, this.y, this.particleSize, this.particleSize);
    }
    end() {
        this.context.clearRect(this.x, this.y, this.particleSize, this.particleSize);
    }
    line() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.x += Math.random();
        this.y += Math.random();
        this.context.lineTo(this.x, this.y);
        this.context.closePath();
        this.context.stroke();
    }
    update(speedX, speedY) {
        // for (let j = 0; j < 2; j++) {
        //     this.x += speedX;
        //     this.y += speedY;
        //     this.context.fillRect(this.x, this.y, this.particleSize, this.particleSize);
        // } 
        //(j : controls the speed of the particle animation)
        this.x += speedX;
        this.y += speedY;
        //this.context.fillRect(this.x, this.y, this.particleSize, this.particleSize);
    }
    gridUpdate(resolution, noColms, flowField) {
        let x = Math.floor(this.x/resolution);
        let y = Math.floor(this.y/resolution);
        let index = y * noColms + x;

        let angle = flowField[index];
        this.x += Math.cos(angle);
        this.y += Math.sin(angle);
    }
    gridLine(resolution, noColms, flowField) {
        let x = Math.floor(this.x/resolution);
        let y = Math.floor(this.y/resolution);
        let index = y * noColms + x;

        let angle = flowField[index];

        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.x += Math.random();
        this.y += Math.random();
        this.context.lineTo(this.x, this.y);
        this.context.closePath();
        this.context.stroke();
    }
}