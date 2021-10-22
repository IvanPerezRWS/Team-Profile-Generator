
// name, id, email, getname(), getId() getEmail() getRole()-> Return 'Engineer,
// also Github-name

class Engineer {
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
    getName() {
        return name;
    }
    getId() {
        return id;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;