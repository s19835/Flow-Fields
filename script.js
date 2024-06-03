import particle  from "./particle.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//setting draw style
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';

let p = new particle(width, height);
p.init(ctx);