class Particle{
  constructor(loc) {
    this.loc = loc.copy();
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.97);
    this.acc.mult(0);
  }

  display() {
    fill(255,150);
    noStroke();
    var ellipseSize = random(4,50);
    ellipse(this.loc.x, this.loc.y, ellipseSize, ellipseSize);
  }
}
