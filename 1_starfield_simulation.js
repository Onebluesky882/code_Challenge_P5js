let stars = [];

function setup() {
  createCanvas(1000, 800);

  let i = 0;
  while (i <= 1000) {
    stars[i] = new Star();
    i++;
  }
}

function draw() {
  background(20);
  let i = 0;

  translate(width / 2, height / 2);

  while (i <= 1000) {
    stars[i].update();
    stars[i].show();

    i++;
  }
}

class Star {
  constructor() {
    let x = random(-width, width);
    let y = random(-height, height);

    this.xSpeed = random(-1, 10);
    this.ySpeed = random(-1, 10);
    this.x = x;
    this.y = y;
    this.z = random(width);
  }
  update() {
    this.z = this.z - 10;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  show() {
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);
    fill(255);
  }
}
