class Personnage {
    constructor(age, nom, ville) {
        this.age = age;
        this.nom = nom;
        this.ville = ville;

        // method
        this.sePresenter = () => {
            return `Bonjour, je m'appel ${this.nom}`
        }
    }
}

const jean = new Personnage(25, 'Jean', 'Namur');
const marie = new Personnage(56, "Marie", "Gembloux");
console.log(jean.sePresenter());
console.log(marie.sePresenter());