var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function save()
{
    recognition.start();
    speak();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
Webcam.attach(camera);
function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id = "result1" src = "'+data_uri+'"/>';
    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML = '<img id = "result2" src = "'+data_uri+'"/>';
    }
    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML = '<img id = "result3" src = "'+data_uri+'"/>';
    }
    });
}

function speak(){

    
    var synth = window.speechSynthesis;
    setTimeout(function(){
        img_id ="selfie1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);
        
    
}
