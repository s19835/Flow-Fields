const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//setting draw style
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';

class Particle {
    constructor(effect) {
        this.Effects = effect;
        this.x = Math.floor(Math.random() * this.Effects.width);
        this.y = Math.floor(Math.random() * this.Effects.height);
    }
    draw(context) {
        context.fillRect(this.x, this.y, 10, 10);
    }
}

class Effects {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.particles = [];
    }

    init() {
        this.particles.push(new Particle(this));
    }
}

const effect = new Effects(canvas.width, canvas.height);
effect.init();
const particle = new Particle(effect);
particle.draw(ctx);