class Lieux {
    constructor(nom, contenu, ingredients) {
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
};

const maison = new Lieux("maison", []);
const epicerie = new Lieux("epicerie", [], []);
const cuisine = new Lieux("cuisine", [], []);

console.log(maison);
console.log(epicerie);
console.log(cuisine);


class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

const poivron = new Ingredients("poivron", "Entier", 1);
const oignon = new Ingredients("oignon", "entier", 2);
const oeuf = new Ingredients("oeuf", "entier", 4);
const epice = new Ingredients("epice", "moulu", 3.25);
const paprika = new Ingredients("paprika", "moulu", 1.5);
const fromage = new Ingredients("fromage", "coupé", 1.6);

class Personne {
    constructor(nom, lieu, argent, panier, se_deplacer, payer, couper) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.se_deplacer = function se_deplacer(x) {};
        this.payer = function payer(x) {};
        this.couper = function couper(x, y) {};
    }
}

const personnage = new Personne("Maxime", "Neant", 100, []);

console.log(personnage);