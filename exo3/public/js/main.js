class Objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

const boite = ["colt", "pomme", "orange", "banane"]


const cerise = new Objet("cerise", 3.99);
const peche = new Objet('peche', 2.49);
console.log(cerise);
class Personnage {
    constructor(nom, sac, argent, prendre, acheter) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (prendre) => {
            this.sac.push(prendre);
        }
        this.acheter = () => {
            if (this.argent > 400) {
                let prise = anie.sac.splice(0, 1);
                this.sac.push(prise);
            }
        };
    }
}


const anie = new Personnage("Annie", [], 200)
const marie = new Personnage("Marie", [], 500)
anie.prendre(boite[1]);
marie.prendre(boite[2]);
console.log(anie);
console.log(marie);
marie.acheter();
console.log(marie);
console.log(anie);