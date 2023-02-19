Webcam.attach('#camera');


function take_snapshot()
{
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML ='<img id="captureed_image" src="'+data_uri+'"/>';
  })
}

console.log('ml5 version:', ml5.version);
  classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zVfB87vhU/model.json',modelLoaded);

  function modelLoaded(){
    console.log('Modle Loaded!');
  }

  function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function gotResult(error, result){
    if (error){
     console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("result_object_name").innerHTML=result[0].label;
      document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.tofixed(3);
    }
  }
