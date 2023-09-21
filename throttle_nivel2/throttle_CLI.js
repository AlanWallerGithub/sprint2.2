"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({ input: process.stdin,
    output: process.stdout });
function imprimirInput() {
    return console.log("\nPara salir del loop, pulsa barra espaciadora");
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
const imprimirConThrottle = throttle(imprimirInput, 1000);
function funcionCLI() {
    console.log("Pulsa cualquier tecla del teclado, tantas veces como quieras. Solo se ejecutará la función una vez por segundo");
    var stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', function (key) {
        // El loop se rompe con BARRA ESPACIADORA
        if (key === '\u0020') {
            process.exit();
        }
        imprimirConThrottle();
    });
}
funcionCLI();
