import particle  from "./particle.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const noParticles = 1000;

//setting draw style
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';

for (let i = 0; i < noParticles; i++) {
    let p = new particle(width, height);
    p.init(ctx);
    function animate() {
        p.line(ctx);
        requestAnimationFrame(animate);
    }
    //p.line(ctx);
    animate();
}
