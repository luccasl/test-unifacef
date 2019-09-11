const Estado = (nomeUF, nroVeiculos, nroAcidentes, percVeiculos) => {
    return {
        nomeUF: nomeUF,
        nroVeiculos: nroVeiculos,
        nroAcidentes: nroAcidentes,
        percVeiculos: !!percVeiculos ? percVeiculos : 0
    }
}

var estadoList = []

const Indice = {
    estado: "",
    indice: 0
}

var maiorIndice = Indice
var menorIndice = Indice

var mediaAcidentes = 0


function dialogoEstado() {
    nomeUF = ""
    while(!(nomeUF = prompt("Informar nome do Estado:")) || nomeUF.length < 1) {
        alert("Favor informar um nome de Estado válido!")
    }

    nroVeiculos = 0
    while(!(nroVeiculos = parseInt(prompt("Informar número de veículo que circularam nesse Estado(em 2012):")))) {
        alert("Favor informar um numero válido!")
    }

    nroAcidentes = 0
    while(!(nroAcidentes = parseInt(prompt("Informar número de acidentes de trânsito(em 2012):")))) {
        alert("Favor informar um número válido!")
    }

    estadoList.push(Estado(nomeUF, nroVeiculos, nroAcidentes))
}

function calcularEstatisticas() {
    var totalVeiculos = 0
    estadoList.forEach((value, index, array) => {
        totalVeiculos += value.nroVeiculos
    })

    estadoList.forEach((value, index, array) => {
        // Calcular índice do Estado
        let indice = (value.nroAcidentes / value.nroVeiculos) * 100

        // Encontrar maior índice
        if(maiorIndice.value == "" || indice > maiorIndice.indice) {
            maiorIndice.estado = value.nomeUF
            maiorIndice.indice = indice
        }

        // Encontrar menor índice
        if(menorIndice.value == "" || indice < menorIndice.indice) {
            menorIndice.estado = value.nomeUF
            menorIndice.indice = indice
        }

        // Calcular média de acidentes por Estado
        mediaAcidentes += value.nroAcidentes

        // Calcular percentual de veículos por Estado
        value.percVeiculos = (value.nroVeiculos / totalVeiculos) * 100
    })

    mediaAcidentes = mediaAcidentes / estadoList.length
}

function mostrarRelatorio() {
    percVeiculosStr = ""
    estadoList.forEach((value, index, array) => {
        percVeiculosStr += `    ${value.nomeUF} - ${value.percVeiculos}% ${index < estadoList.length-1 ? '\n' : ''}`
    })

    alert(`Maior índice
    -Estado: ${maiorIndice.estado}
    -Índice: ${maiorIndice.indice}
Menor índice
    -Estado: ${menorIndice.estado}
    -Índice: ${menorIndice.indice}
Percentual de veículos por Estado
${percVeiculosStr}
Média de acidentes por Estado: ${mediaAcidentes}
`)
}

function inicio() {
    for(let i = 0; i < 20; i++) {
        dialogoEstado()
    }

    calcularEstatisticas()

    mostrarRelatorio()
}
