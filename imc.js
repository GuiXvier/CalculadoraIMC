const calcular = document.getElementById('calcular')

function imc() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resposta = document.getElementById('resposta')

    if (nome !== '' && altura !== '' && peso !== '') {
        let classificacao = '';

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso"
        } else if (valorIMC < 25) {
            classificacao = "com peso ideal. Parabéns!"
        } else if (valorIMC < 30) {
            classificacao = "levemente acima do peso."
        } else if (valorIMC < 35) {
            classificacao = "com ovesidade grau I"
        } else if (valorIMC < 40) {
            classificacao = "com Obesidade grau II"
        } else {
            classificacao = "com obesidade grau III. Cuidado!!"
        }

        resposta.textContent = `${nome} seu imc é ${valorIMC} e você está ${classificacao}`
    }
    else {
        resposta.textContent = "Preencha todos os campos"
    }

}

calcular.addEventListener('click', imc)