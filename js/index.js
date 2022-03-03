let codersNames = ["Jessica Mejia", "Liviu Badea", "Abde Belkhialat", "Adrián Pelayo", "Damaris Teoc", "Ales", "Daniel Calvo", "Àlex Vidal", "Scarlet Rosa", "Albert Martinez", "Ingrid Alvarez", "Uri Codina", "Sergi Aparicio", "Guillermo", "Miguel Angel"];
let deadCodersNames = [];
let aliveMenuButton = document.getElementById('boton-vivos');
let deadMenuButton = document.getElementById('boton-muertos');
let myAliveMenu = document.getElementById('menu-vivos');
let myDeadMenu = document.getElementById('menu-muertos');
let alivePeopleMenu = document.getElementById('vivos');
let deadPeopleMenu = document.getElementById('muertos');


const deadPerson = document.getElementById('person');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

function randomName(max){

    resultRandomName = Math.floor(Math.random()*max);

    return resultRandomName;

}

function killCoder(coderList, randomNumber, deadList){
    let deadCoder = "";
    
    for (let index = 0; index < coderList.length; index++) {
        if (index == randomNumber) {
            deadCoder = coderList.splice(index, 1).toString();
            deadList.unshift(deadCoder);
        }
    }

    return deadCoder;

}

function start(coderList, deadList){
    
    let max = coderList.length;
    let randomNumber = randomName(max);
    let deadCoder = killCoder(coderList, randomNumber, deadList);

    deadPerson.innerHTML = deadCoder;

} 

function reset(coderList,deadList){

    let deadCoders = deadList.splice(0, deadList.length);

    codersNames = coderList.concat(deadCoders);

    deadPerson.innerHTML = "";
    
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

    alivePeopleMenu.innerText = coderList;
}

function showDeadMenu() {

    toggleMenu(myDeadMenu, myAliveMenu);

    let coderList = makeTextFromArray(deadCodersNames);

    deadPeopleMenu.innerText = coderList;
}

aliveMenuButton.addEventListener('click', showAliveMenu);
deadMenuButton.addEventListener('click', showDeadMenu);

startButton.addEventListener('click', () => {
    start(codersNames, deadCodersNames);
});

resetButton.addEventListener('click', () => {
    reset(codersNames, deadCodersNames);
});