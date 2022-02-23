let codersNames = ["Jessica Mejia", "Liviu Badea", "Abde Belkhialat", "Adrián Pelayo"];
let deadCodersNames = [];

const deadPersonParagraph = document.getElementById('person');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

/**
 * function getRandomNumber
 * 
 * Argumentos: max (Número máximo que va a generar)
 * 
 * Función: Generar un número aleatorio
 */

function getRandomNumber(max) {

    let resultRandomNumber;

    resultRandomNumber = Math.random() * (max - 0) + 0;

    resultRandomNumber = Math.floor(resultRandomNumber);

    return resultRandomNumber;

}

/**
 * function KillCoder
 * 
 * Argumentos: coderList (lista de vivos), resultRandomNumber (número generado aleatorio), deadCoderList (lista de muertos)
 * 
 * Función: Quita al coder del array de vivos para meterlo al array de los muertos
 */

function killCoder(coderList, resultRandomNumber, deadCoderList) {

    
    let deadCoder = coderList.splice(resultRandomNumber, 1);

    deadCoderList.push(deadCoder);

    return deadCoder;

}

/**
 * function Reset
 * 
 * Argumentos: ninguno
 * 
 * Función: Limpia la lista de muertos, reviviéndolos, y haciendo que resetee el juego.
 */

function reset() {

    for (let index = 0; index < deadCodersNames.length; index++) {

        let coder = deadCodersNames[index];

        codersNames.push(coder);

    }

    deadCodersNames = [];

    deadPersonParagraph.innerHTML = "";

}

/**
 * Función StartKill
 * 
 * Argumentos: ninguno
 * 
 * Función: Guillotinea a una persona.
 */

function startKill() {
    let max = codersNames.length;
    
    let randomNumber = getRandomNumber(max);

    let coder = killCoder(codersNames, randomNumber, deadCodersNames);

    deadPersonParagraph.innerHTML = coder;

}

startButton.addEventListener('click', startKill);
resetButton.addEventListener('click', reset);