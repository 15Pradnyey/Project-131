img = "";

function preload() {
    img = loadImage("https://thumbs.dreamstime.com/b/sports-water-bottles-table-against-blurred-background-132203948.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    text("Bottle", 200, 150,);
    stroke("blue");
    rect(10, 150, 620, 250);
    fill(255, 0, 0, 0);
    noFill();
    
}

function back() {
    location.href = "home.html";
}