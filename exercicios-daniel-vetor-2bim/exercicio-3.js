var codigos = [],
    estoque = []

inicio = function(){
    //Popular estoque
    vet3()
    // codigos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // estoque = [60, 10, 50, 40, 80, 90, 70, 5, 7, 10]

    //Iniciar compras
    comprar()
}

vet3 = function() {
    for(let i = 0; i < 10; i++) {
        codigos.push(Number(prompt('Informar codigo de produto:')))
        estoque.push(Number(prompt('Informar quantidade do produto:')))
    }
}

comprar = function() {
    var clieCodi = -1
    while(clieCodi != 0) {
        clieCodi = Number(prompt('Informar codigo do cliente(0 para finalizar):'))
        if(clieCodi == 0) {
            break;
        }

        let codProd = Number(prompt('Informar codigo de produto:'))
        let pos = codigos.indexOf(codProd)
        if(pos >= 0) {
            let qtdeProd = Number(prompt('Informar quantidade do produto:'))

            if(estoque[pos]-qtdeProd >= 0) {
                estoque[pos] = estoque[pos] - qtdeProd;
                alert('Pedido atendido. Obrigado e volte sempre!')
            } else {
                alert(`Nao temos estoque suficiente dessa mercadoria.
Estoque: ${estoque[pos]}
Pedido: ${qtdeProd}`)
            }
        } else {
            alert('Codigo inexistente!')
            continue;
        }
    }
}