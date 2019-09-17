function soma(n, x = 0) {
	x = n + x
	if(n > 0) {
		return soma(n-1, x)
	} else {
		return x
	}
}

function calculo(n) {
	if(!Number.isInteger(n)) {
		throw new Exception("N deve ser um número inteiro")
	}

    if(n < 0) {
        throw new Exception("N deve ser positivo")
    }

    return soma(n)
}

function inicio() {
	var n = 0
	while(!(n = parseInt(prompt("Informar um numero N:")))) {
		alert("Favor informar um numero valido!")
	}

    soma = calculo(n)
    alert(`Soma dos numeros de 1 a ${n} = ${soma}`)
}