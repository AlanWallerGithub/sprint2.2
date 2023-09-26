"use strict";
function imprimirInput() {
    let elementoHTML = document.getElementById('mostrar');
    if (elementoHTML) {
        return elementoHTML.innerHTML += "CLIC ";
    }
}
const throttle = (callback, limit) => {
    let bloqueador = true;
    return function () {
        if (typeof (callback) !== 'function') {
            let elementoHTML = document.getElementById('mostrar');
            if (elementoHTML) {
                return elementoHTML.innerHTML = "ERROR: el callback debe ser una función";
            }
        }
        else if (bloqueador === true) {
            callback();
            bloqueador = false;
            setTimeout(() => {
                bloqueador = true;
            }, limit);
        }
    };
};
document.addEventListener("click", throttle(imprimirInput, 1000));
