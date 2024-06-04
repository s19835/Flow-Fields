import particle  from "./particle.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const noParticles = 1000;

//setting draw style
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';

for (let index = 0; index < noParticles; index++) {
    let p = new particle(width, height);
    p.init(ctx);
}