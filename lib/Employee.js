//Employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    //Returns name from input
    getName () {
        return this.name;
    }

    //Returns ID from input
    getId () {
        return this.id;
    }   

    //Returns email from input
    getEmail () {
        return this.email;
    }

    //Returns Employee type 
    getRole () {
        return 'Employee'; 
    }

    //Returns office number
    //May be error in failed test
    getOfficeNumber () {
        return this.officeNumber;
    }

};


module.exports = Employee; 