/* //SEÇÃO PARA TESTES
var vendedores = {
    123: "teste1",
    231: "teste2",
    321: "teste3",
    432: "teste4"
}

var vendas = {
    1: {
        123: 1200,
        231: 2200
    },
    2: {
        321: 4000,
        231: 2000,
        432: 3000
    },
    3: {
        123: 3300,
        321: 2000
    }
} */

//Time de vendedores(chave: código, valor: nome)
var vendedores = {}
//Vendas associadas a vendedores por mês(chave:mês, valor:{chave:<código do vendedor>, valor:<valor em reais da venda>})
var vendas = {}

//Retornar lista com todos vendedores precedidos por seus códigos.
function listarVendedores() {
    var tabVend = "Vendedores:"
    for(vend in vendedores) {
        if(tabVend.length > 0) {
            tabVend += "\n"
        }
        tabVend += `.${vend} - ${vendedores[vend]}`
    }

    return tabVend
}

//Rotina de cadastro de vendedor
function cadastrarVendedor() {
    var cod = 0
    while(!(cod = parseInt(prompt(`${listarVendedores()}
Informar código do vendedor:`))) ||
    vendedores[cod] != undefined) {
        alert("Favor informar um código válido!")
    }
    var nome = ""
    while(!(nome = prompt("Informar nome do vendedor:"))) {
        alert("Favor informar um nome válido!")
    }

    vendedores[cod] = nome
}

//Rotina de cadastro de vendas
function cadastrarVenda() {
    var cod = 0
    while(!(cod = parseInt(prompt(`${listarVendedores()}
Informar código do vendedor:`))) ||
    vendedores[cod] == undefined) {
        alert("Favor informar um código válido!")
    }
    var mes = 0
    while(!(mes = parseInt(prompt("Informar número do mês:"))) ||
    (vendas[mes] != undefined &&
    vendas[mes][cod] != undefined)) {
        alert("Favor informar um número de mês válido!")
    }
    var valor = 0
    while(!(valor = parseFloat(prompt("Informar um valor em vendas:")))) {
        alert("Favor informar um valor válido!")
    }

    vendas[mes][cod] = valor
}

//Rotina de consulta de vendas mensais de determinado vendedor
function consultarVendasMensal() {
    var cod = 0
    while(!(cod = parseInt(prompt(`${listarVendedores()}
Informar código do vendedor:`))) ||
    vendedores[cod] == undefined) {
        alert("Favor informar um código válido!")
    }
    var mes = 0
    while(!(mes = parseInt(prompt("Informar número do mês:"))) ||
    vendas[mes] == undefined ||
    vendas[mes][cod] == undefined) {
        alert("Favor informar um número de mês válido!")
    }

    alert(`Vendedor ${cod}(${vendedores[cod]}):
Mês nro. ${mes}
Vendas: R$${vendas[mes][cod]}`)
}

//Rotina de consulta de total de vendas de determinado vendedor
function consultarTotalVendedor() {
    var cod = 0
    while(!(cod = parseInt(prompt(`${listarVendedores()} 
Informar código do vendedor:`))) ||
    vendedores[cod] == undefined) {
        alert("Favor informar um código válido!")
    }

    var total = 0
    for(let mes in vendas) {
        if(vendas[mes][cod] != undefined) {
            total += vendas[mes][cod]
        }
    }

    alert(`Vendedor ${cod}(${vendedores[cod]}):
Total de vendas: R$${total}`)
}

//Rotina de encontrar melhor vendedor de determinado mês
function melhorVendedorMes() {
    var mes = 0
    while(!(mes = parseInt(prompt("Informar número do mês:"))) ||
    vendas[mes] == undefined) {
        alert("Favor informar um número de mês válido!")
    }

    var cod = 0
    var maiorValor = 0
    for(let vend in vendas[mes]) {
        if(vendas[mes][vend] > maiorValor) {
            cod = vend
            maiorValor = vendas[mes][vend]
        }
    }

    alert(`Mês nro. ${mes}:
Vendedor que mais vendeu: ${cod}(${vendedores[cod]})
Valor vendido: R$${maiorValor}`)
}

//Rotina de encontrar mês com maior valor em vendas
function mesMaisVendas() {
    var maiorTotal = 0
    var mesMaior = 0
    for(let mes in vendas) {
        let total = 0
        for(let vend in vendas[mes]) {
            total += vendas[mes][vend]
        }

        if(total > maiorTotal) {
            maiorTotal = total
            mesMaior = mes
        }
    }

    alert(`Mês com mais vendas: ${mesMaior}
Vendas: R$${maiorTotal}`)
}

//Inicializar time de vendedores
function inicializar() {
    for(let i = 0; i < 4; i++) {
        let cod = 0
        while(!(cod = parseInt(prompt("Informar código do vendedor:"))) ||
        vendedores[cod] != undefined) {
            alert("Favor informar um código válido!")
        }
        let nome = ""
        while(!(nome = prompt("Informar nome do vendedor:"))) {
            alert("Favor informar um nome válido!")
        }
    
        vendedores[cod] = nome
    
        let fim = false
        while(!fim) {
            let mes = 0
            while(!(mes = parseInt(prompt("Informar número do mês:"))) ||
            (vendas[mes] != undefined &&
            vendas[mes][cod] != undefined)) {
                alert("Favor informar um número de mês válido!")
            }
            let valor = 0
            while(!(valor = parseFloat(prompt("Informar um valor em vendas:")))) {
                alert("Favor informar um valor válido!")
            }
    
            if(vendas[mes] == undefined) {
                vendas[mes] = {}
            }
            vendas[mes][cod] = valor
            
            fim = prompt("Deseja continuar cadastrando vendas?(S-padrão/n)").toUpperCase() == "N"
        }
    }
}

//Construir menu de rotinas do programa
function menu() {
    fim = false

    while(!fim) {
        let op = prompt(`=Menu=
1 - Cadastrar vendedor
2 - Cadastrar venda
3 - Consultar vendas de um vendedor em determinado mês
4 - Consultar total de vendas de um vendedor
5 - Número do vendedor que mais vendeu em determinado mês
6 - Número do mês com mais vendas
0 - Finalizar
Selecionar opção:`)

        switch(op) {
            case "1":
                cadastrarVendedor()
                break;

            case "2":
                cadastrarVenda()
                break;

            case "3":
                consultarVendasMensal()
                break;

            case "4":
                consultarTotalVendedor()
                break;

            case "5":
                melhorVendedorMes()
                break;

            case "6":
                mesMaisVendas()
                break;

            case "0":
                fim = true
                break;

            default:
                alert("Favor informar uma opção válida!")
                break;
        }
    }
}

//Início do programa
function comeco() {
    alert("Favor cadastrar vendedores iniciais:")
    inicializar()

    menu()

    alert("Finalizado")
}