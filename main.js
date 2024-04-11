song="";
leftx = 0;
lefty = 0;
rightx = 0;
righty = 0;
function preload()
{
song = loadSound("music.mp3");
}
function setup(){
        Canvas = createCanvas(600,500);
        Canvas.center;
        video = createCapture(VIDEO);
        video.hide();
        pose1 = ml5.poseNet(video,modelLoaded);
        pose1.on("pose",gotPoses);
}
function draw()
{
    image(video,0,0,600,500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(0.3);
}
function modelLoaded()
{
    console.log("model is loaded");

}
function gotPoses(results)
{
   if (results.length>0)
   {
    console.log(results);
    leftx = results[0].pose.leftWrist.x;
    lefty = results[0].pose.leftWrist.y;
    console.log("leftx = "+leftx + "lefty"+lefty);

    rightx = results[0].pose.rightWrist.x;
    righty = results[0].pose.rightWrist.y;
    console.log("rightx = "+rightx + "righty"+righty);

   }

}