function calcular() {
  const formulario = document.getElementById("formulario");

  const peso = +formulario.peso.value;
  const altura = +formulario.altura.value;

  const imc = peso / (altura * altura);

  if (validar(peso, altura)) {
    return;
  }

  let resultado = "";

  if (imc < 18.5) {
    resultado = "Magreza";
  } else if (imc > 18.5 && imc <= 24.9) {
    resultado = "Normal";
  } else if (imc > 24.9 && imc <= 30) {
    resultado = "Sobrepeso";
  } else if (imc > 30) {
    resultado = "Obesidade";
  }

  formulario.imc.value = `${imc.toFixed(2)} - ${resultado}`;
}

function validar(peso, altura) {
  let retorno = false;

  if (!peso) {
    alert("Informe o peso");
    retorno = true;
  }

  if (!altura) {
    alert("Informe a altura");
    retorno = true;
  }

  return retorno;
}
