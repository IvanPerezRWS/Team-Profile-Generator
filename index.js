const fs = require('fs');
const { prompt } = require('inquirer');
const inquirer = require('inquirer');

// flib files
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

function generatemember() {
    inquirer.prompt([{
        message: "Enter team memeber's name: ",
        name: "name"
    },
    {
        message: 'Enter memeber Id: ',
        name: 'id'
    },
    {
        message: "Enter team memer's email address: ",
        name: "email"
    },
    {
        type: 'list',
        message: 'Enter position: ',
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ],
        name: "role"
        
    }

])
.then(function({ name, id, email, role }) {
    let extrainfo = "";
    if (extrainfo === "Engineer") {
        extrainfo = "Github";
    } else if (extrainfo === "Intern") {
        extrainfo = "School";
    } else { (extrainfo === "Manager")
        extrainfo = "Office Number";
    }
    // prompt user for missing info
    inquirer.prompt ([ {
        message: `Enter team member's ${extrainfo}`,
        name: 'extrainfo'
    }
    ]);
});

}

generatemember();

