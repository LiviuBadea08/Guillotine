let codersNames = ["Jessica Mejia", "Liviu Badea", "Abde Belkhialat", "Adrián Pelayo", "Yeray Moya", "Jessica Mejia", "Liviu Badea", "Abde Belkhialat", "Adrián Pelayo", "Yeray Moya", "Jessica Mejia", "Liviu Badea", "Abde Belkhialat", "Adrián Pelayo", "Yeray Moya"];
let deadCodersNames = [];


function getRandomNumber(max) {

    let resultRandomNumber;

    resultRandomNumber = Math.random() * (max - 0) + 0;

    resultRandomNumber = Math.floor(resultRandomNumber);

    return resultRandomNumber

}

function killCoder(coderList, resultRandomNumber, deadCoderList) {

    
    let deadCoder = coderList.splice(resultRandomNumber, 1);

    deadCoderList.push(deadCoder);

}
