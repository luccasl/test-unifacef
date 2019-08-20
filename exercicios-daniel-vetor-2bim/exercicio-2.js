var vet = []
var mult2 = [], mult3 = [], mult23 = []

for (var i = 0; i < 15; i++) {
    var input = window.prompt("Entre um número(qualquer caractér alfanumérico para finalizar):")

    if (!isInteger(input)) {
        break;
    }

    vet.push(input)

    if (!(vet[i] % 2)) {
        mult2.push(vet[i])
    }
    if (!(vet[i] % 3)) {
        mult3.push(vet[i])
    }
    if (!(vet[i] % 2) && !(vet[i] % 3)) {
        mult23.push(vet[i])
    }
}

alert(`Multiplos de 2:
${mult2.join(', ')}
Multiplos de 3:
${mult3.join(', ')}
Multiplos de 2 e 3:
${mult23.join(', ')}`)
