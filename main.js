Song1="";
Song2="";
leftwristx="";
leftwristy="";
rightwristx="";
rightwristy="";
function preload(){
Song1=loadSound("Never Have I Ever.mp3");
Song2=loadSound("Phenomena.mp3");
}
function setup(){
    video=createCapture(VIDEO)
    canvas = createCanvas(400,300);
    canvas.position(475,200);
    
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
    
    video.hide();
}
function modelLoaded(){
    console.log("Model Loaded")
}
function draw(){
    image(video,0,0,550,350)
    fill("#FF0000")
stroke("#FF0000")
circle(leftwristx,leftwristy,20)
circle(rightwristx,rightwristy,20)
if (score>0.2) {
    if (convertedlwy=Number(leftwristy)>0) {
        
        if (song_Song1.isPlaying()==true) {
            song_Song1.stop()
            song_Song2.play()
            
    }
    if (convertedlwy=Number(rightwristy)>0) {
        
        if (song_Song2.isPlaying()==true) {
            song_Song2.stop()
            song_Song1.play()
            
    }
    }
}}}
   
    
   

function gotPoses(results){
if (results.length <= 0) {
  
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y
        console.log("leftwristx="+leftwristx+"  leftwristy"+leftwristy+"  rightwristx="+rightwristx+"  rightwristy"+rightwristy)
        score=results[0].pose.keypoints[9].score
}
}

