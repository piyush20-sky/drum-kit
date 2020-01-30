
var numberOfDrumButtons= document.querySelectorAll(".drum").length;

var audioArray=['sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3','sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3'];

for(var i=0;i<numberOfDrumButtons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

         var buttonInnerHtml=this.innerHTML;
         makeSound(buttonInnerHtml);
         addAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown",function(event){

  makeSound(event.key);
  addAnimation(event.key);

});

function makeSound(key){

  switch (key) {
    case "w":
               var crash=new Audio(audioArray[0]);
               crash.play();

      break;
     case "a":
               var kick=new Audio(audioArray[1]);
               kick.play();

       break;
     case "s":
               var snare=new Audio(audioArray[2]);
               snare.play();

       break;
     case "d":
               var tom1=new Audio(audioArray[3]);
               tom1.play();

       break;
     case "j":
               var tom2=new Audio(audioArray[4]);
               tom2.play();

       break;
     case "k":
               var tom3=new Audio(audioArray[5]);
               tom3.play();

       break;
     case "l":
               var tom4=new Audio(audioArray[6]);
               tom4.play();

       break;

    default:
          var defaul=new Audio(audioArray[6]);
          defaul.play();


  }


}

function addAnimation(currentKey){

 var activeButton= document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
