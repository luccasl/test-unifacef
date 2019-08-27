const habitante = (sexo, altura, idade, corOlhos) => {
    return ({
        sexo: !!sexo ? sexo : "",              //H - homem, M - mulher, O - outro
        altura: !!altura ? altura : .0,
        idade: !!idade ? idade : 0,
        corOlhos: !!corOlhos ? corOlhos : ""   //A - azuis, V - verdes, C - castanhos
    })
}

var habitantes = []
var media = .0                 //Media da idade das pessoas com olhos castanhos e altura superior a 1,60m
var nro1 = 0                   //Número de pessoas que se enquadram na média
var maiorIdade = 0
var qtde = .0                  //Quantidade de individuos do sexo feminino com idade entre 20 e 45 anos(inclusive) ou que tenham olhos verdes e altura inferior a 1,70m
var percHom = .0               //Percentual de homens

function resultados() {
    alert(`::Resultados::
=======================================================
Média: ${media}
Maior idade entre os habitantes: ${maiorIdade} anos
Quantidade: ${qtde} mulheres
Percentual de homens: ${percHom}%`)
}

function funcao() {
    var i = 0
    while(i < 20) {
        let sexo = ""
        if(!(sexo = prompt("Informar sexo(H/M/O)").toUpperCase()) || (sexo != 'H' && sexo != 'M' && sexo != 'O')) {
            alert("Favor informar um sexo valido!")
            continue;
        }
        let altura = .0
        if(!(altura = parseFloat(prompt("Informar altura:")))) {
            alert("Favor informar uma altura valida!")
            continue
        }
        let idade = 0
        if(!(idade = parseInt(prompt("Informar idade:")))) {
            alert("Favor informar uma idade valida!")
            continue
        }
        let corOlhos = ""
        if(!(corOlhos = prompt("Informar cor dos olhos(A - azuis, V - verdes, C - castanhos):").toUpperCase()) ||
        (corOlhos != 'A' && corOlhos != 'V' && corOlhos != 'C')) {
            alert("Favor informar uma cor de olho valida!")
            continue
        }

        habitantes.push(habitante(sexo, altura, idade, corOlhos))

        if(corOlhos == 'C' && altura > 1.6) {
            media += idade
            nro1++
        }

        if(idade > maiorIdade) {
            maiorIdade = idade
        }

        if(sexo == 'H') {
            percHom++
        } else if(sexo == 'M' && ((idade >= 20 && idade <= 45) ||
                                  (corOlhos = 'V' && altura < 1.7))) {
            qtde++
        }

        i++
    }

    media = media / nro1
    percHom = 100 * (percHom / i)

    resultados()
}