
class Manager {
    constructor(name, id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getName() {
        return name;
    }
    getId() {
        return id;
    }
    getEmail() {
        return email;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return officeNumber;
    }
    
}

module.exports = Manager;