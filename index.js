let numberofdrums=document.querySelectorAll(".drum").length;
//console.log(numberofdrums)
for(let i=0; i<numberofdrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let buttonInnerHTML = this.innerHTML;
makesound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){
  makesound(event.key);
  buttonanimation(event.key);
  
});


function makesound(key){
  switch(key){
    case "w":
      let audio1=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/tom-1.mp3?raw=true");
      audio1.play();
      break;
      
          case "a":
      let audio2=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/tom-2.mp3?raw=true");
      audio2.play();
      break;
      
      
        case "s":
      let audio3=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/tom-3.mp3?raw=true");
      audio3.play();
      break;
      

       case "d":
      let audio4=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/tom-4.mp3?raw=true");
      audio4.play();
      break;
      
      
      
       case "j":
      let audio5=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/snare.mp3?raw=true");
      audio5.play();
      break;
      
      
       case "k":
      let audio6=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/crash.mp3?raw=true");
      audio6.play();
      break;
      
      
        case "l":
      let audio7=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/kick-bass.mp3?raw=true");
      audio7.play();
      break;
      
    case "z":
      let audio8=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/crash.mp3?raw=true");
      audio8.play();
      
    case "x":
      let audio9=new Audio("https://github.com/m10hit/Drum-Kit/blob/master/sounds/crash.mp3?raw=true")
      audio9.play();
    default:console.log(key);
  }
}
function buttonanimation(currentkey){
  let activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
