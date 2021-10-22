
class Intern {
    constructor(name, id, email, role, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
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
        return role;
    }
    getSchool() {
        return school;
    }
    
}

module.exports = Intern