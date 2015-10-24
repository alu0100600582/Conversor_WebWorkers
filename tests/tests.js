var expect = chai.expect;

describe("Test BDD para el Conversor de Temperatura", function() {

  var fin = document.getElementById("resultado");

  it("Resultado esperado: 45e2 F", function() {
    var temp = new Temperatura();
    temp.set_valor(45e2);
    temp.set_tipo("F");
    expect(temp.get_valor()).to.equal(45e2);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("Resultado esperado: -2e-2 C", function() {
    var temp = new Temperatura();
    temp.set_valor(-5e-2);
    temp.set_tipo("C");
    expect(temp.get_valor()).to.equal(-5e-2);
    expect(temp.get_tipo()).to.equal("C");
  });

  it("Resultado esperado: 10.1e10 F", function() {
    var temp = new Temperatura();
    temp.set_valor(10.1e10);
    temp.set_tipo("F");
    expect(temp.get_valor()).to.equal(10.1e10);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("12.35C === 54.23F", function() {
    var temp = new Temperatura();
    temp.set_valor(12.35);
    temp.set_tipo("C");
    var result = temp.conversor();
    expect(result).to.equal("El resultado es: 54.230000000000004 F");
  });

  it("32F === 0C", function() {
    var temp = new Temperatura();
    temp.set_valor(32);
    temp.set_tipo("F");
    var result = temp.conversor();
    expect(result).to.equal("El resultado es: 0 C");
  });

  it("Funcion constructor", function() {
     var temp = new Temperatura();
     temp.inicializar("0.032C");

     expect(temp.get_valor()).to.equal(0.032);
     expect(temp.get_tipo()).to.equal("C");
   });

  it("Funcion conversor", function() {
    window.onload = function() {
      ini.value = "0.032C";
      conversor();

      expect(resultado.innerHTML).to.equal("El resultado es: 32.0576 F");
    }
  });

  it("5X === ERROR", function() {
    window.onload = function() {
      var temp = new Temperatura(5,0,"X");
      expect(fin.innerHTML).to.match("/no es correcto/");
    }
  });
});
