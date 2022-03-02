let codersNames = ["Jessica Mejia", "Liviu Badea", "Abde Belkhialat", "Adrián Pelayo"];
let deadCodersNames = [];
let myButton = document.getElementById('boton-vivos');
let my2Button = document.getElementById('boton-muertos');
let myAliveMenu = document.getElementById('menu-vivos');
let myDeadMenu = document.getElementById('menu-muertos')
let myParagraph = document.getElementById('vivos');
let my2Paragraph = document.getElementById('muertos');


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

    deadCoderList.unshift(deadCoder);

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

function makeTextFromArray(array) {
    let text = '';
    for (let index = 0; index < array.length; index++) {
        text += array[index];
        text += "\n";
    }
    return text;
}

function toggleMenu(firstMenu, secondMenu) {

    firstMenu.classList.toggle('show');
    secondMenu.classList.remove('show');

}

function showAliveMenu() {

    toggleMenu(myAliveMenu, myDeadMenu);

    let coderList = makeTextFromArray(codersNames);

    myParagraph.innerText = coderList;
}

function showDeadMenu() {

    toggleMenu(myDeadMenu, myAliveMenu);

    let coderList = makeTextFromArray(deadCodersNames);

    my2Paragraph.innerText = coderList;
}

myButton.addEventListener('click', showAliveMenu);
my2Button.addEventListener('click', showDeadMenu);

startButton.addEventListener('click', startKill);
resetButton.addEventListener('click', reset);