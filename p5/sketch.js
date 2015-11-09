var system;
var song;
var xpos = -150;
var speed = 2;
var sublimex = 900
var sublimey = 300

function preload() {
  song = loadSound("terra.wav");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    system = new ParticleSystem(createVector(width/2, height/2));
    //song.play();
    song.loop();
  
}

function draw() {
	// place your drawing code here

background(205,240,255);
    
var y3height = Math.random()*100;
    
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
    stroke(159,200,255);
    line(0,0,width,height);
    line(width,0,0,height);
    
    stroke("cyan");
    fill(230,255,255);
    strokeWeight(10);
    quad(width/2,200,width*0.4,height/2,width/2,400,width*0.6,height/2);
    
    stroke("cyan");
    fill(240,255,250);
    strokeWeight(1);
    quad(width/2,300,width*0.41,height/2,width/2,400,width*0.59,height/2);
    
    stroke("cyan");
    fill(240,255,240);
    strokeWeight(1);
    
    textSize(32);
        text("love", 700, 300);
        fill(0, 102, 153);
        push();
        angleMode(DEGREES);
        rotate(30);
    textSize(80);
        textFont('Pacifico');
  text("peace", 346, -100);

        pop();
        fill(0, 102, 153, 51);
    textSize(60);
        text("hope", 100, width/2);
push();
    system.addParticle();
    system.run();
pop();
    textSize(32);
        text("<3", 700, 450);
        fill(0, 102, 153);
    textSize(95);
        
        push();
        if(xpos > width)
        {
        xpos = -150;
        }
        xpos = xpos + speed;
        text("Y-3", xpos, 400);
        pop();
        
        
        fill(0, 102, 153, 51);
    textSize(60);
        text("hope", 120, width*0.52);
    textSize(10);
        text("frieden", 500, 300);
        fill(230,30,250,150);
        text("frieden", 500, 320);
        
    textSize(100);    
        noFill();
        stroke("pink");
        strokeWeight(2);
        textFont('Pacifico');
        text("sublime", sublimex, sublimey);
      
        
    console.log(key);
    if(key == "M") 
    {
      song.setVolume(0.0);
    }  
    else 
    {
      song.setVolume(1.0);
    }
    
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.1);
  this.velocity = createVector(random(0.9, -0.8), random(-10, -10));
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