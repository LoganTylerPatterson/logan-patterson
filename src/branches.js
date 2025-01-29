// branches.js
import './style.css';

let container, canvas, context;
let WIDTH, HEIGHT;
let branches = [];
let mouseX, mouseY;

function init() {
  container = document.getElementById('container');
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;

  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  container.appendChild(canvas);

  context = canvas.getContext("2d");
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, WIDTH, HEIGHT);

  window.addEventListener('mousedown', onWindowMouseDown);
}

function onWindowMouseDown(e) {
  e = e || window.event;
  mouseX = e.clientX;
  mouseY = e.clientY;
  branches.push(new Branch(mouseX, mouseY, 1000));
}

function loop() {
  context.beginPath();
  context.strokeStyle = "#f2746b";

  for (let i = 0; i < branches.length; i++) {
    const branch = branches[i];
    branch.life++;

    context.moveTo(branch.x, branch.y);
    branch.rw += Math.random() - 0.5;
    branch.x += Math.cos(branch.rw) * branch.speed;
    branch.y += Math.sin(branch.rw) * branch.speed;
    context.lineTo(branch.x, branch.y);

    if (branch.life > branch.max_life || branch.x < 0 || branch.y < 0 || branch.x > WIDTH || branch.y > HEIGHT) {
      branches.splice(i, 1);
    }

    if (Math.random() > 0.98 && branches.length < 1000) {
      branches.push(new Branch(branch.x, branch.y, branch.max_life / 9));
    }
  }

  context.stroke();
  context.closePath();
  context.fillStyle = "rgba(0, 25, 25, 0.05)";
  context.fillRect(0, 0, WIDTH, HEIGHT);
}

class Branch {
  constructor(x, y, max_life) {
    this.life = 0;
    this.max_life = max_life;
    this.speed = Math.random() + 1;
    this.x = x;
    this.y = y;
    this.rw = Math.random() * 360;
  }
}

// Initialize the app
export function initializeBranches() {
  init();
  setInterval(loop, 1000/60);
}