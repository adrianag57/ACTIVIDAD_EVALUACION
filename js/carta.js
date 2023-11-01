export default class Carta {

    constructor(palo, nombre){
        
        this._palo = palo;
        this._nombre = nombre;
    }

    get Palo() {

        return this._palo;
    }

    set Palo(palo) {

        return this._palo = palo;
    }

    get Nombre() {

        return this._nombre;
    }

    set Nombre(nombre) {

        return this._nombre = nombre;
    }

    toString() {

        return this._palo + "-" + this._nombre;
    }
}