"use strict";

var w;

if(typeof(Worker) !== "undefined"){
  if(typeof(w) == "undefined"){
    w = new Worker("temperature.js");
  }
}

function initworker(){
  var value = document.getElementById('inicial').value;
  w.postMessage(value);
}

w.onmessage = function(event){
    document.getElementById("resultado").innerHTML = event.data;
};
