function calcularSegundos(hrs, mins, segs) {
	return segs + (mins * 60) + (hrs * 3600)
}

function inicio() {
	var hrs = 0
	var mins = 0
	var segs = 0
	const errMsg = "Favor informar um valor valido!"
	while(!(hrs = parseInt(prompt("Informar um valor em horas:")))) {
		alert(errMsg)
	}
	while(!(mins = parseFloat(prompt("Informar um valor de minutos:")))) {
		alert(errMsg)
	}
	while(!(segs = parseFloat(prompt("Informar um valor de segundos:")))) {
		alert(errMsg)
	}

	var totalSeg = calcularSegundos(hrs, mins, segs)

	alert(`Horas: ${hrs}
Minutos: ${mins}
Segundos: ${segs}
Total de segundos: ${totalSeg} segundos`)
}