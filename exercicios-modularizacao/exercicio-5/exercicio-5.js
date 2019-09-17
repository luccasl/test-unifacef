function sinal(n) {
	return n >= 0
}

function inicio() {
	n = 0
	while(!(n = parseInt(prompt("Informar um numero N:")))) {
		alert("Favor informar um numero valido!")
	}

	sinal = sinal(n)

	alert(`Número ${n}
Sinal: ${sinal ? "positivo" : "negativo"}`)
}