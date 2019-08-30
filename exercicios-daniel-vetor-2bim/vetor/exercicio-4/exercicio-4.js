var mediaRenda = .0
var maiorIdade = 0
var menorIdade = 0
var qtdeMul = 0

function resultados() {
    alert(`::Resultados::
=======================================================
Media de salário: ${mediaRenda}
Maior idade do grupo: ${maiorIdade}
Menor idade do grupo: ${menorIdade}
Quantidade de mulheres com mais de 2 filhos e renda familiar < R$600,00: ${qtdeMul}`)
}

function funcao() {
    var i = 0
    while(i < 3) {
        let idade = 0
        if(!(idade = parseInt(prompt("Informar idade:")))) {
            alert("Favor informar uma idade valida!")
            continue
        }
        let sexo = "H"
        if(!(sexo = prompt("Informar sexo(H/M/O)").toUpperCase()) || (sexo != 'H' && sexo != 'M' && sexo != 'O')) {
            alert("Favor informar um sexo valido!")
            continue;
        }
        let nroFilhos = 0
        if(!(nroFilhos = parseInt(prompt("Informar numero de filhos:")))) {
            alert("Favor informar um numero de filhos valido!")
            continue
        }
        let renda = .0
        if(!(renda = parseFloat(prompt("Informar renda familiar:")))) {
            alert("Favor informar uma renda familiar valida!")
            continue
        }

        mediaRenda += renda

        if(idade > maiorIdade) {
            maiorIdade = idade
        }
        if(idade < menorIdade || i == 0) {
            menorIdade = idade
        }

        if(sexo == 'M' && renda < 600 && nroFilhos > 2) {
            qtdeMul++
        }

        i++
    }

    mediaRenda = mediaRenda / i

    resultados()
}