function calcularVolume(r) {
	return (4*Math.PI * r*r*r) / 3
}

function inicio() {
	r = 0
	while(!(r = parseFloat(prompt("Informar um valor de raio:")))) {
		alert("Favor informar um valor valido!")
	}

	v = calcularVolume(r)

	alert(`Raio da esfera: ${r}
Volume: ${v}`)
}