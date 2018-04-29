var particle;

function setup() {
 createCanvas(500, 500);
 particle = new Particle(createVector(10, height/2));
 particle.applyForce(createVector(10, 0));

}

function draw() {
  background(50);
  noStroke();
  fill(0, 255, 0);
  particle.applyForce(createVector(0, 0.1));
  particle.update();
  particle.display();

}
