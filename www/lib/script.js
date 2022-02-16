function exibir() {
    var valor1 = parseFloat(document.getElementById("val1").value);
    var valor2 = parseFloat(document.getElementById("val2").value);
    var resposta = document.getElementById("resposta");

    calculando = valor1 * valor1;
    r = valor2 / calculando;
    alert(r);

    if (r < 18.5) {
        resposta.innerHTML = "Abaixo do Peso";
        document.getElementById('img').src = "../img/Figura3.png";
    }
    else if (r > 18.5 && r < 24.9) {
        resposta.innerHTML = "Peso Normal";
        document.getElementById('img').src = "../img/Figura4.png";
    }
    else if (r > 25 && r < 29.9) {
        resposta.innerHTML = "Sobrepeso";
        document.getElementById('img').src = "../img/Figura5.png";
    }
    else if (r > 30 && r < 34.9) {
        resposta.innerHTML = "Obesidade Grau I";
        document.getElementById('img').src = "../img/Figura5.png";
    }
    else if (r > 35 && r < 39.9) {
        resposta.innerHTML = "Obesidade Grau II";
        document.getElementById('img').src = "../img/Figura5.png";
    }
    else {
        resposta.innerHTML = "Obesidade Grau III ou Mórbida";
        document.getElementById('img').src = "../img/Figura5.png";
    }
}

