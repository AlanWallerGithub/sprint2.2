"use strict";
function imprimirInput(inputUsuarioParametro) {
    return inputUsuarioParametro;
}
const throttle = (callback, limit) => {
    let bloqueador = true;
    return function () {
        if (typeof (callback) !== 'function') {
            return "ERROR: el callback debe ser una función";
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
module.exports = { throttle };
