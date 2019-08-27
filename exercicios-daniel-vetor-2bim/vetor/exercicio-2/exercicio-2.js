var mediaSal = .0
var mediaNroFilhos = .0
var maiorSal = .0
var percMul = .0
var nroMul = 0

function resultados() {
    alert(`::Resultados::
=======================================================
Media de salário: ${mediaSal}
Media de nro. de filhos: ${mediaNroFilhos}
Maior salário: ${maiorSal}
Percentual de mulher com salário superior a R$ 1000.00: ${percMul}%`)
}

function funcao() {
    var i = 0
    while(i < 20) {
        let salario = .0
        if(!(salario = parseFloat(prompt("Informar salario:")))) {
            alert("Favor informar um salario valido!")
            continue
        }
        let idade = 0
        if(!(idade = parseInt(prompt("Informar idade:")))) {
            alert("Favor informar uma idade valida!")
            continue
        }
        let nroFilhos = 0
        if(!(nroFilhos = parseInt(prompt("Informar numero de filhos:")))) {
            alert("Favor informar um numero de filhos valido!")
            continue
        }
        let sexo = "H"
        if(!(sexo = prompt("Informar sexo(H/M/O)").toUpperCase()) || (sexo != 'H' && sexo != 'M' && sexo != 'O')) {
            alert("Favor informar um sexo valido!")
            continue;
        }

        mediaSal += salario
        mediaNroFilhos += nroFilhos

        if(salario > maiorSal) {
            maiorSal = salario
        }

        if(sexo == 'M') {
            nroMul++

            if(salario > 1000) {
                percMul++
            }
        }

        i++
    }

    mediaSal = mediaSal / i
    mediaNroFilhos = mediaNroFilhos / i
    percMul = 100 * (percMul / nroMul)

    resultados()
}