//Imports Employee constructor 
const Employee = require('./Employee');


//Manager constructor - extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //Calls Employee constructor
        super (name, id, email); 
        //officeNumber(); {return this.officeNumber};
        this.officeNumber = officeNumber;
     
    }

    //Overrides Employee role to manager 
    getRole () {
        return "Manager";
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
    
}


module.exports = Manager; 