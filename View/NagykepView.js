

class NagyKepView {
    #kep;
    #szuloElem;
    #balGomb;
    #jobbGomb;
    #nagyIMGElem;

    constructor(szuloElem, kep) {
        this.#kep = kep;
        this.#szuloElem = szuloElem;
        this.#htmlBeagyaz();
        this.#nagyIMGElem = $("#nagyImg");
        
        this.#balGomb = $("#balLapoz");
        this.#jobbGomb = $("#jobbLapoz");

        this.#balGomb.on("click", (event) => {
            this.#esemenyLetrehoz(event);
        });

        this.#jobbGomb.on("click", (event) => {
            this.#esemenyLetrehoz(event);
        });
    }

    #htmlBeagyaz() {
        let txt = `<button class="gomb" id="balLapoz"><</button>
                    <div class="kepTarolo">
                        <image src="${this.#kep}" alt="${this.#kep}" id="nagyImg">
                    </div>
                   <button class="gomb" id="jobbLapoz">></button>`

        this.#szuloElem.append(txt);
    }

    nagyKepBeallit(kep) {
        this.#nagyIMGElem.attr({"src" : kep, "alt" : kep});

    }

    #esemenyLetrehoz(event) {
        window.dispatchEvent(new CustomEvent("leptetes", {detail : event.target.id}));
    }
}
 
export default NagyKepView;