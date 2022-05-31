export class ConnectedCitizen {
    constructor(numeroSS, matricule, pseudo, lastname, prename, email, birth_date) {
        this.numeroSS = numeroSS;
        this.matricule = matricule;
        this.pseudo = pseudo;
        this.lastname = lastname;
        this.prename = prename;
        this.email = email;
        this.birth_date = birth_date;
    }


    getNumeroSS(){
        return this.numeroSS;
    }

    getMatricule(){
        return this.matricule;
    }

    getPseudo(){
        return this.pseudo;
    }

    getLastname(){
        return this.lastname;
    }

    getPrename(){
        return this.prename;
    }

    getEmail(){
        return this.email;
    }

    getBirthDate(){
        return this.birth_date;
    }
}

