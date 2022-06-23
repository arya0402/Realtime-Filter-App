noseX = 0;
noseY = 0; 
function preload() {
    img = loadImage("https://i.postimg.cc/d3MLqdHv/clown-nose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(img, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save("FilterImage.png");
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 17;
        noseY =  results[0].pose.nose.y - 20;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}