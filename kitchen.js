img = "";

function preload() {
    img = loadImage("https://i.postimg.cc/y6p1jNPx/f627ca109bb9ed5ae52856b85501b6ea.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    text("Bed", 200, 150);
    stroke("red");
    rect(100, 150, 400, 250);
    fill(255, 0, 0, 0);
    noFill();
    
}

function back() {
    location.href = "home.html";
}