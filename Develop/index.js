// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		message: "Please Enter the Title of your Project.",
		name: "title Request",
		validate: (titleCheck) => {
			if (!titleCheck) {
				console.log("Please make sure to enter your Title before you move on.");
				return false;
			}
			return true;
		},
	},

	{
		type: "input",
		message: "Please provide a Description of your Project.",
		name: "Description Request",
		validate: (descriptionCheck) => {
			if (!descriptionCheck) {
				console.log(
					"Please make sure to enter a Description of your project before you move on."
				);
				return false;
			}
			return true;
		},
	},

	{
		type: "input",
		message:
			"Please provide the Instructions for the Installation of your Project.",
		name: "Installation Request",
		validate: (installationCheck) => {
			if (!installationCheck) {
				console.log(
					"Please make sure to enter some Instructions for the Installation of your project before you move on. If no installation is required, please enter 'N/A'."
				);
				return false;
			}
			return true;
		},
	},

	{
		type: "input",
		message: "Please provide the Instructions for the Use of your Project.",
		name: "Usage Request",
		validate: (usageCheck) => {
			if (!usageCheck) {
				console.log(
					"Please make sure to enter some Instructions for the Use of your project before you move on. If no use section is needed, please enter 'N/A'."
				);
				return false;
			}
			return true;
		},
	},
	{
		type: "input",
		message:
			"Please provide information on the Contributions others may have had on your Project",
		name: "Contributions Request",
		validate: (contributionsCheck) => {
			if (!contributionsCheck) {
				console.log(
					"If others have worked with you on this Project, please provide information who they are and what they contributed. If no one else contributed, please enter 'N/A'."
				);
				return false;
			}
			return true;
		},
	},
	{
		type: "input",
		message:
			"Please provide information on the testing that users may use on this Project",
		name: "Contributions Request",
		validate: (testingCheck) => {
			if (!testingCheck) {
				console.log(
					"If there is no testing for this Project, please enter 'N/A'."
				);
				return false;
			}
			return true;
		},
	},
	{
		type: "list",
		message: "Please choose a license or this Project.",
		name: "License",
		choices: ["GNU", "Apache 2.0", "ISC", , "MIT", "BSD", "GPL v3.0", "None"],
		validate: (licenseCheck) => {
			if (licenseCheck) {
				return true;
			} else {
				console.log(
					"Please select a license, if you do not want to utilize a license, please select the 'None' option."
				);
				return false;
			}
		},
	},
	{
		type: "input",
		message: "Please provide your GitHub username",
		name: "Username Request",
		validate: (usernameCheck) => {
			if (!usernameCheck) {
				console.log("Please Enter your GitHub Username before moving forward");
				return false;
			}
			return true;
		},
	},
	{
		type: "input",
		message: "Please provide your email address",
		name: "Email Request",
		validate: (emailCheck) => {
			if (!emailCheck) {
				console.log("Please Enter your email before moving forward");
				return false;
			}
			return true;
		},
	},
	{
		type: "input",
		message: "Please provide your GitHub username",
		name: "Username Request",
		validate: (usernameCheck) => {
			if (!usernameCheck) {
				console.log("Please Enter your GitHub Username before moving forward");
				return false;
			}
			return true;
		},
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.WriteToFile(fileName, data, (err) => {
		if (err) throw err;
		console.log("You have created the Readme file.");
	});
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then(function (answer) {
		console.log(answer);
		let fileContent = generateMarkdown(answer);
		writeToFile(fileContent);
	});
}

// Function call to initialize app
init();
