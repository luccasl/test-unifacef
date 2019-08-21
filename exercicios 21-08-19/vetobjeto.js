//Construtor - Produto
const MakeProduto = (codigo = 0, nome = "", qtde = 0, preco = 0) => {
    produto = {codigo: codigo,
               nome: nome,
               qtde: qtde,
               preco: preco}

    produto.toString = function() {
        return (`[Produto]
Codigo: ${String(this.codigo)}
Nome: ${this.nome}
Quantidade: ${String(this.qtde)}
Preco: ${String(this.preco)}`)
    }

    return produto
}

function funcao() {
    //Criar vetor
    var vet = []

    //Definir contagem de estoque
    var estoque = 0

    //Criar objeto
    {
        let objeto
        for(let i = 0; i < 5; i++) {
            objeto = MakeProduto(Number(prompt("Informar codigo:")),
                                 prompt("Informar nome:"),
                                 Number(prompt("Informar quantidade:")),
                                 Number(prompt("Informar preco:")))
            vet.push(objeto)
    
            alert('Produto criado com sucesso:\n' +
                   objeto.toString())
            estoque++
        }
    }

    //Mostrar contagem de estoque
    alert(`Estoque: ${String(estoque)} produtos.`)
}