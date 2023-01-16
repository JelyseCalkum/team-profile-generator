//Imports Employee constructor 
const Employee = require('./Employee');

//Intern constructor to extend employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        //Calls Employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    //Returns school from input 
    getSchool () {
        return this.school;
    }

    //Overrides employee role to intern
    getRole () {
        return "Intern";
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
    
}


module.exports = Intern; 