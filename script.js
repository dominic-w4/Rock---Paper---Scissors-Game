// Add Click Eventlistener to container and save id of target element in variable 
   var options   = ["stone", "scissor", "paper"];
   var compChoice = options[Math.round(Math.random() * 2)];
   var yChoice 
   
document.getElementById("container").addEventListener("click", function(event) {
  var yourChoice = event.target.id;
  alert (yourChoice);
  yChoice = yourChoice
  }, false);
  
          

  
  if (compChoice == "scissor" && yChoice == "paper" || compChoice== "paper" && yChoice == "stone" || compChoice== "stone" && yChoice == "scissor"){
    
   alert("You lose"+"Computer"+ compChoice +"You"+ yChoice);
 
}
  
 else if (compChoice == yChoice){
    alert("Try again"+compChoice +"You"+yChoice);
 }
  
 else {
   alert("you won!"+ yChoice);
 }

