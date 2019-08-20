var vetLog = [], vetLing = []
var sim = 0

for (var i = 0; i < 15; i++) {
    var input = window.prompt("Logica de Programação - Entre um número de matrícula(qualquer caractér alfanumérico para finalizar):")

    if (!isInteger(input)) {
        break;
    }

    vetLog.push(input)
}

for (var i = 0; i < 10; i++) {
    var input = window.prompt("Linguagem de Programação - Entre um número de matrícula(qualquer caractér alfanumérico para finalizar):")

    if (!isInteger(input)) {
        break;
    }

    vetLing.push(input)

    if (vetLog.includes(input)) {
        sim ++;
    }
}

alert(`Matriculas que cursam linguagem e logica simultaneamente:\n${sim}`)
