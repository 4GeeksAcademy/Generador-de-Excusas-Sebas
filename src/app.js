import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who= ["My cousin", "My grandma", "My grilfriend", "My professor"];
  let action= ["ate", "peed", "crushed", "broke"];
  let what= ["my homework", "my phone", "the car" ,"My console"];
  let when= ["when I was training", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];
  //write your code here

  function generateExcuse(){
    let randomwho = who[Math.floor(Math.random()* who.length )];
    let randomaction = action[Math.floor(Math.random()* action.length)];
    let randomwhat =what [Math.floor(Math.random()* what.length)];
    let randomwhen = when [Math.floor(Math.random()* when.length)];

    return`${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
  }
    
  
  document.getElementById("excuse").innerHTML = generateExcuse();
};
