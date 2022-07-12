
export class Contact {
    name = '';
    fullName = '';
    email = '';
    conected = false;

    constructor(name, fullName, email, conected){
        this.name = name
        this.fullName = fullName
        this.email = email
        this.conected = conected
    }
}