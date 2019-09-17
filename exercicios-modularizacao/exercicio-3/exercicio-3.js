function validarString(a, b) {
	if(a == b) {
		return 0
	}

	for(let i = 0; i < b.length; i++) {
		if(b[i] != a[i]) {
			return i+1
		}
	}
}

function inicio() {
	var a = ""
	var b = ""
	while(!(a = prompt("Informar uma palavra A:"))) {
		alert("Favor informar uma palavra valida!")
	}
	while(!(b = prompt("Informar uma palavra B para comparação:"))) {
		alert("Favor informar uma palavra valida!")
	}

	indiceDiv = validarString(a, b)

	if(indiceDiv == 0) {
		alert("As duas palavras são iguais")
	} else {
		alert(`As palavras divergem no indice ${indiceDiv}!`)
	}
}