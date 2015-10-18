var expect = chai.expect;

describe("Test BDD para el Conversor de Temperatura", function() {

  var fin = document.getElementById("resultado");

  it("Resultado esperado: 45e2F", function() {
    var temp = new Temperatura(45e2,"F");
    expect(temp.get_valor()).to.equal(45e2);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("Resultado esperado: -2e-2C", function() {
    var temp = new Temperatura(-5e-2,"C");
    expect(temp.get_valor()).to.equal(-5e-2);
    expect(temp.get_tipo()).to.equal("C");
  });

  it("Resultado esperado: 10.1e10F", function() {
    var temp = new Temperatura(0,"C");
    temp.set_valor(10.1e10);
    temp.set_tipo("F");
    expect(temp.get_valor()).to.equal(10.1e10);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("12.35C === 54.23F", function() {
    var temp = new Temperatura();
    temp.set_valor(12.35);
    temp.set_tipo("C");
    var res = temp.convertirF();
    expect(res).to.equal(54.23);
  });

  it("32F === 0C", function() {
    var temp = new Temperatura();
    temp.set_valor(32);
    temp.set_tipo("F");
    var res = temp.convertirC();
    expect(res).to.equal(0);
  });

  it("5X === ERROR", function() {
    window.onload = function() {
      var temp = new Temperatura(5,0,"X");
      calculate();
      expect(fin.innerHTML).to.match("/no es correcto/");
    }
  });
});
