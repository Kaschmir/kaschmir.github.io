var system;


function setup() {
    createCanvas(windowWidth, windowHeight);
    system = new ParticleSystem(createVector(width/2, height/2));
}

function draw() {
	// place your drawing code here

background(205,240,255);
    
    strokeWeight(500);
    stroke("pink");
    line(0,0,width,height);
    line(width,0,0,height);
    
    strokeWeight(460);
    stroke(60,25,255);
    line(0,0,width,height);
    line(width,0,0,height);

    strokeWeight(250);
    stroke(60,55,255);
    line(0,0,width,height);
    line(width,0,0,height);

    strokeWeight(200);
    stroke(60,15,255);
    line(0,0,width,height);
    line(width,0,0,height);
 
    strokeWeight(150);
    stroke(14,44,187);
    line(0,0,width,height);
    line(width,0,0,height);
    
    strokeWeight(100);
    stroke("pink");
    line(0,0,width,height);
    line(width,0,0,height);
    
    stroke("cyan");
    fill(255,255,255);
    strokeWeight(10);
    quad(width/2,200,width*0.4,height/2,width/2,400,width*0.6,height/2);
    
    textSize(32);
        text("love", 700, 300);
        fill(0, 102, 153);
        text("peace", 346, 60);
        fill(0, 102, 153, 51);
    textSize(60);
        text("hope", 100, width/2);

    textSize(32);
        text("<3", 700, 450);
        fill(0, 102, 153);
        text("<3", width/2, 400);
        fill(0, 102, 153, 51);
    textSize(60);
        text("hope", 120, width/2);
        
    
    system.addParticle();
    system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.3);
  this.velocity = createVector(random(0.9, -0.8), random(-1, -1));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 3;
};

// Method to display
Particle.prototype.display = function() {
  stroke(2000, this.lifespan);
  strokeWeight(20);
  fill(255, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};