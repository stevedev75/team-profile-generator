const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.gihub = github;
    }

    getRole() {
    return 'Engineer'
    }

    getGithub() {
    return this.github
    }
}

module.exports=Engineer;