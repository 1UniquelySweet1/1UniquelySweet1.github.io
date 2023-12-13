var height = 200;
var name = "Creative Expression of Ratatouille";
var circleSize = 50;
var currentColorposition = 0; 
var colors = ["red", "purple", "white", "green", "orange"]; 
var backgroundColor = "#49044F"; // 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
}

function draw() {
  if (mouseIsPressed === true) {
    currentColorposition = (currentColorposition + 1) % colors.length;
    fill(colors[currentColorposition]);
    
    // Circle start small and gets bigger when the mouse is pressed
    circleSize += 5;
    ellipse(mouseX, mouseY, circleSize, circleSize);
  }

  
  fill("#E3FFEB");
  textSize(20);
  text(name, 20, 30);

  
  fill("#FFFFFF");
  textSize(18);
  text("What you see start off as circles in different colors. Drag the mouse for a surprise of the flavor of Ratatouille.", 50, height - 50);
}

function keyPressed() {
  // Change background colors on 'C' key press
  if (key === 'C' || key === 'c') {
    backgroundColor = color(random(255), random(255), random(255));
    background(backgroundColor);
  }
}
