import Carta from "./carta";

export default class Baraja {

    constructor() {

        this._baraja = [];
        this.iniciarCartas();
    }

    iniciarCartas() {

        const palos = ["Diamantes", "Corazones", "Picas", "Tréboles"];
        const nombres = ["AS", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

        for (let i = 0; i < palos.length; i++) {

            this._baraja[i] = new Array(13);
            for (let j = 0; j < nombres.length; j++) {

                this._baraja[i][j] = new Carta(palos[i], numeros[j]).toString();
            }
        }
    }

    generaCarta() {

        const paloAleatorio = Math.floor(Math.random() * this._baraja.length);
        const nombreAleatorio = Math.floor(Math.random * this._baraja[paloAleatorio].length);
        const cartaAleatoria = this._baraja[paloAleatorio][nombreAleatorio];
        return cartaAleatoria;
    }
}