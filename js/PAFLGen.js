import { mutantGen } from "/js/gens/mutants.js";
import { stalkerGen } from "/js/gens/stalkers.js";
import { scientistGen } from "/js/gens/scientists.js";

let mut = mutantGen()
let stl = stalkerGen()
let sci = scientistGen()


let showContainer = document.getElementById('container')
let mutantButton = document.getElementById('mutantButton')
let stalkerButton = document.getElementById('stalkerButton')
let scientistButton = document.getElementById('scientistButton')
/*
function containerSwap(type) {
    if (type === 'mutantButton') {
        showContainer.innerHTML = mut;
    } else if (type === 'stalkerButton') {
        showContainer.innerHTML = 'Unfinished Stalker'
    } else if (type === 'scientistButton') {
        showContainer.innerHTML = 'Unfinished Scientist'
    } else { showContainer.innerHTML = ''}
}
*/
function clearCont() {
    showContainer.replaceChildren()
}

function mutCont() {
    mut = mutantGen()
    clearCont()
    showContainer.insertAdjacentHTML('afterbegin', mut)
}

function staCont() {
    stl = stalkerGen()
    clearCont()
    showContainer.insertAdjacentHTML('afterbegin', stl)
}

function sciCont() {
    sci = scientistGen()
    clearCont()
    showContainer.insertAdjacentHTML('afterbegin', sci)
}

mutantButton.addEventListener('click', function() { mutCont() })
stalkerButton.addEventListener('click', function() { staCont() })
scientistButton.addEventListener('click', function () { sciCont() })

let lightModeButton = document.getElementById('lightMode');
lightModeButton.addEventListener('click', function () { lightMode() })

function lightMode() {
    let element = document.body;
    element.classList.toggle('lightMode');
}