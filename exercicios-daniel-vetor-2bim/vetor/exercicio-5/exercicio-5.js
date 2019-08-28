vetProd = []

const Produto = (codigo, descricao, valorUnit, qtdeEstoque) => {
    return({
        codigo: codigo,
        descricao: descricao,
        valorUnit: valorUnit,
        qtdeEstoque: qtdeEstoque,
        toString: () => {
            return `Produto de código ${codigo}:
Descrição: ${descricao}
Valor unitário: ${valorUnit}
Quantidade em estoque: ${qtdeEstoque}`
        }
    });
}

function vetProdToString(vetProd) {
    return `Estoque:
${vetProd.map((prod) => {
        return prod.toString() + '\n'
    })}`
}

function criarEstoque() {
    var i = 0
    while(i < 3) {
        let codigo = 0
        let descricao = ""
        let valorUnit = 0
        let qtdeEstoque = 0

        if(!(codigo = parseInt(prompt("Informar código:")))) {
            alert("Favor informar um código válido!")
            continue
        }
        if(!(descricao = prompt("Informar descricao:"))) {
            alert("Favor informar uma descrição válida!")
            continue
        }
        if(!(valorUnit = parseFloat(prompt("Informar valor unitário:")))) {
            alert("Favor informar um valor unitário válido!")
            continue
        }
        if(!(qtdeEstoque = parseInt(prompt("Informar quantidade em estoque:")))) {
            alert("Favor informar uma quantidade válida!")
            continue
        }

        let produto = Produto(codigo, descricao, valorUnit, qtdeEstoque)
        vetProd.push(produto)
        i++
    }

    vetProd.sort()
    alert(vetProdToString(vetProd))
}

function revisarEstoque() {
    var novoVetProd = []
    for(let i = 0; i < 3; i++) {
        let descricao = ""
        let valorUnit = 0
        let qtdeEstoque = 0

        if(!(descricao = prompt("Informar descricao:"))) {
            alert("Favor informar uma descrição válida!")
            continue
        }
        if(!(valorUnit = parseFloat(prompt("Informar valor unitário:")))) {
            alert("Favor informar um valor unitário válido!")
            continue
        }
        if(!(qtdeEstoque = parseInt(prompt("Informar quantidade em estoque:")))) {
            alert("Favor informar uma quantidade válida!")
            continue
        }

        novoVetProd.push(vetProd[i].codigo, descricao, valorUnit, qtdeEstoque)
    }

    novoVetProd.sort()
    vetProd = novoVetProd

    alert(vetProdToString(vetProd))
}

function rotinaLetra() {
    var letra = ""
    var letraAscii = 0
    while(!(letra = prompt("Informar uma letra:").toUpperCase()) ||
    letra.length > 1 ||
    !(letraAscii = letra.charCodeAt(0)) ||
    letraAscii < 65 ||
    letraAscii > 90) {
        alert("Favor informar uma letra válida!")
    }

    var vetMatchProd = []
    vetProd.forEach((prod, index, array) => {
        if(prod.descricao.charAt(0).toUpperCase() == letra) {
            vetMatchProd.push(prod)
        }
    })
    vetMatchProd.sort()

    if(vetMatchProd.length > 0) {
        alert(`Produtos que começam com a letra ${letra}:
${vetProdToString(vetMatchProd)}`)
    }
}

function rotinaQtde() {
    vetProdInf = []

    vetProd.forEach((prod, index, array) => {
        if(prod.qtdeEstoque < 5) {
            vetProdInf.push(prod)
        }
    })
    vetProdInf.sort()

    if(vetProdInf.length > 0) {
        alert(`Produtos com quantidade em estoque inferior a 5:
${vetProdToString(vetProdInf)}`)
    } else {
        alert("Nenhum produto com quantidade inferior a 5 em estoque")
    }

}

function comeco() {
    alert("Inicializando estoque")
    criarEstoque()
    alert("Revisando estoque")
    revisarEstoque()
    alert("Rotina letra")
    rotinaLetra()
    alert("Rotina quantidade")
    rotinaQtde()
}