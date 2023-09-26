import Model from "../Model/Model.js";
import NagyKepView from "../View/NagykepView.js";


class Controller{
    #adatokModel;
    #nagyKep;
    constructor() {
        this.#adatokModel = new Model();
        this.#nagyKep = new NagyKepView($("#nagykep"), this.#adatokModel.getAktKep());


        $(window).on("leptetes", (event) => {
            let fn = event.detail;

            this.#adatokModel[fn]();
            this.#nagyKep.nagyKepBeallit(this.#adatokModel.getAktKep());
        })
    }



}

export default Controller;