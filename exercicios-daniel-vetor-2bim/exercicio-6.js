vendList = []
comList = []
totVendList = []

for(let i = 0; i < 5; i++) {
    var nome
    while(!(nome = prompt("Entrar nome do vendedor:")) ||
          nome.trim() == "") {
        alert("Nome de vendedor invalido!")
    }
    vendList.push(nome)
    var com
    while(!(com = prompt("Entrar comissao do vendedor:")) ||
          isNaN(com) ||
          com.trim() == "") {
        alert("Valor de comissao invalido!")
    }
    comList.push(parseFloat(com))
    var totVend
    while(!(totVend = prompt("Entrar total de vendas do vendedor:")) ||
          isNaN(totVend) ||
          totVend.trim() == "") {
        alert("Total de vendas invalido!")
    }
    totVendList.push(parseInt(totVend))
}