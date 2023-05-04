
var btn = document.querySelector("button");

var flag=0;
btn.addEventListener("click", function(){

      if(flag===0){
    document.querySelector("h4").textContent="Friend request sent";
    document.querySelector("h4").style.color="orange";
    document.querySelector("button").textContent= "Cancel request";
    document.querySelector("button").style.backgroundColor="orange"
    setTimeout(function(){
        document.querySelector("h4").textContent= "Friend";
        document.querySelector("h4").style.color= "green";
        document.querySelector("button").textContent= "Remove Friend";
        document.querySelector("button").style.backgroundColor="red"
      }, 2000)
      flag=1;
    }
    else{
        document.querySelector("h4").textContent="stranger";
        document.querySelector("h4").style.color="red";
        document.querySelector("button").textContent= "Add Friend";
        document.querySelector("button").style.backgroundColor="green"
        
          flag=0;
        }

    })