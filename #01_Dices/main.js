let images = [
    "./img/dice_01.jpg",
    "./img/dice_02.jpg",
    "./img/dice_03.jpg",
    "./img/dice_04.jpg",
    "./img/dice_05.jpg",
    "./img/dice_06.jpg"];
// DOM
let dice = document.querySelectorAll('img')

console.log(dice)

function roll(){

    // en cada uno de las img, se va a agregar la clase shake
    dice.forEach(function(e){
        e.classList.add('shake');
    });
    // luego que pase 1 segundo, se elimine la clase shake
    setTimeout(function(){
        dice.forEach(function(e){
            e.classList.remove('shake');
        })
    },1000);
    // creo dos variables que sean numeros randoms del 0 al 6
    let dieOneValue = Math.floor((Math.random()*6));
    let dieTwoValue = Math.floor((Math.random()*6));

    console.log(dieOneValue,dieTwoValue)

    // DOM 
    let dieOne = document.querySelector('#die-1');
    let dieTwo = document.querySelector('#die-2');
    // agregamos un atributo al html src="" y su ruta de la lista images
    dieOne.setAttribute('src',images[dieOneValue]);
    dieTwo.setAttribute('src',images[dieTwoValue]);

}

