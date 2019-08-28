var mediaRenda = .0
var mediaNroFilhos = .0
var maiorIdade = 0
var menorIdade = 0
var percMul = .0
var nroMul = 0

function resultados() {
    alert(`::Resultados::
=======================================================
Media de salário: ${mediaRenda}
Media de nro. de filhos: ${mediaNroFilhos}
Maior salário: ${maiorSal}
Percentual de mulher com salário superior a R$ 1000.00: ${percMul}%`)
}

function funcao() {
    var i = 0
    while(i < 20) {
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
        mediaNroFilhos += nroFilhos

        if(idade > maiorIdade) {
            maiorIdade = idade
        }
        if(idade < menorIdade) {
            menorIdade = idade
        }

        if(sexo == 'M') {
            nroMul++

            if(renda > 1000) {
                percMul++
            }
        }

        i++
    }

    mediaRenda = mediaRenda / i
    mediaNroFilhos = mediaNroFilhos / i
    percMul = 100 * (percMul / nroMul)

    resultados()
}