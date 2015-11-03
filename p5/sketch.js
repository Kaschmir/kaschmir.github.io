function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here

background(205,240,255);

    strokeWeight(460);
    stroke(60,25,255);
    line(0,0,width,height);
    line(width,0,0,height);

    strokeWeight(250);
    stroke(60,255,255);
    line(0,0,width,height);
    line(width,0,0,height);

    strokeWeight(200);
    stroke(60,255,87);
    line(0,0,width,height);
    line(width,0,0,height);
 
    strokeWeight(150);
    stroke(255,44,87);
    line(0,0,width,height);
    line(width,0,0,height);
    
    strokeWeight(100);
    stroke("pink");
    line(0,0,width,height);
    line(width,0,0,height);
    
    stroke("cyan");
    fill(20,240,120);
    strokeWeight(10);
    ellipse(width/2,height/2,100,100);
    
    fill("red");
    rect(width/10,height/10,20,20,2);
    
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
        
    fill("blue");
    strokeWeight(100);
    triangle(300,10,20,100,500,455);
    

}

