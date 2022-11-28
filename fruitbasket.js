img = "";

function preload() {
    img = loadImage("https://i.postimg.cc/WbMJHrfS/Organic-Fruit-Gift-Basket-1920x1200.jpg");
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