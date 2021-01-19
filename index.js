var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
   { 
       var buttonInnerHTML = this.innerHTML;
       makeKeypressSound(buttonInnerHTML);
    //    this checks the click response of the button
        buttonAnimation(buttonInnerHTML);
       

    })
    document.addEventListener("keydown",function(event){
        // this event keyword gives us the info about the key pressed in the whole webpagee
        makeKeypressSound(event.key);
        // event.key gives us the key Pressed
        buttonAnimation(event.key)
    })
    function makeKeypressSound(key){
        switch (key) {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play()
                break;
        }
    }
    // this func adds an animatio onthe keys pressed we predefine a class in css and add the class to all the buttons
    // and once they are added we remove them ater 0.1 sec to make it an Animation
    function buttonAnimation(clickedon){
       var activeButton = document.querySelector("." + clickedon);
       activeButton.classList.add("pressed");
       setTimeout(function(){
            activeButton.classList.remove("pressed");
       },100);
    }
}