var vet = []
var pares = [], impares = []

for (var i = 0; i < 6; i++) {
    var input = window.prompt("Entre um número(qualquer caractér alfanumérico para finalizar):")

    if (!isInteger(input)) {
        break;
    }

    vet.push(input)

    if (vet[i] % 2 == 0) {
        pares.push(vet[i])
    } else {
        impares.push(vet[i])
    }
}

alert(`Números entrados(${vet.length})
${vet.join(', ')}
Números pares(${pares.length})
${pares.join(', ')}
Números impares(${impares.length})
${impares.join(', ')}`)
