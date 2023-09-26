import {KEPLISTA} from "../adat.js";


class Model {
    #lista;
    #id;
    constructor() {
        this.#lista = [...KEPLISTA];
        this.#id = 0;
    }

    jobbLapoz() {
        this.#id++;
        if (this.#id > this.#lista.length - 1) {
            this.#id = 0;
        }
    }

    balLapoz() {
        this.#id--;
        if (this.#id < 0) {
            this.#id = this.#lista.length - 1;
        }
    }

    getId() {
        return this.#id;
    }

    getAktKep() {
        return this.#lista[this.#id];
    }

    getLista() {
        return {...this.#lista};
    }

}

export default Model;