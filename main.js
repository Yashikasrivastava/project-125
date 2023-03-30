leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(500, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('FFE787');
    text('Yàshika' , 50, 400);
}