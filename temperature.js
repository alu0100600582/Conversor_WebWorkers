"use strict";

function Medida () {
  this.valor_;
  this.tipo_;
}

function Temperatura () {
  Medida.call(this);
}

//Temperatura hereda de Medida
Temperatura.prototype = new Medida();

//Constructor
Temperatura.prototype.inicializar = function(temp){

  var exp_regular = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])/;
  var valor = temp.match(exp_regular);

  this.set_valor(parseFloat(valor[1]));
  this.set_tipo(valor[2]);
}

//Getters
Medida.prototype.get_valor = function(){return this.valor_;}
Medida.prototype.get_tipo = function(){return this.tipo_;}
//Setters
Medida.prototype.set_valor = function(valor){this.valor_ = valor;}
Medida.prototype.set_tipo = function(tipo){this.tipo_ = tipo;}


//Conversor
Temperatura.prototype.conversor = function(){

  if(this.get_tipo() === 'C' || this.get_tipo() ==='c'){
    var result = (this.get_valor()*(9/5))+32;
    return ("El resultado es: " + result + " " + "F");
  }

  else{
    var result = (this.get_valor()-32)*(5/9);
    return ("El resultado es: " + result + " " + "C");
  }
}

this.addEventListener('message', function(valor){

  var temperatura = new Temperatura();
  temperatura.inicializar(valor.data);

  var result = temperatura.conversor();

  this.postMessage(result);

}, false);
