const inquirer = require("inquirer");
const index = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
	let badge = "";
	switch (license) {
		case "GNU":
			badge = "`![License](https://img.shields.io/badge/License-GNU-green.svg`";
			break;
		case "Apache 2.0":
			badge =
				"`![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)`";
			break;
		case "ISC":
			badge =
				"`![License](https://img.shields.io/badge/License-ISC-green.svg)`";
			break;
		case "MIT":
			badge =
				"`![License](https://img.shields.io/badge/License-MIT-green.svg)`";
			break;
		default:
			badge = "";
			break;
	}

	return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
function renderLicenseLink(license) {
	let link = "";
	switch (license) {
		case "GNU":
			link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
			break;
		case "Apache 2.0":
			link = "https://www.apache.org/licenses/LICENSE-2.0.html";
			break;
		case "ISC":
			link = "https://https://opensource.org/licenses/ISC";
			break;
		case "MIT":
			link = "https://mit-license.org/";
			break;
		default:
			link = "";
			break;
	}
	return link;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseSection = "";
	if (license) {
		licenseSection = "License: ${license}";
	} else {
		licenseSection = "";
	}
	return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
  # ${data["title Request"]} 
  # ${data.title}
  ## ${renderLicenseBadge(badge)}
  ### ${renderLicenseLink(link)}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

  ## Description:
  ${data["Description Request"]}
  ## Installation:
  ${data["Installation Request"]}
  ## Usage:
  ${data["Usage Request"]}
  ## Contribution:
  ${data["Contributions Request"]}
  ## Testing:
  ${data["Testing Request"]}
  ##License
  ${renderLicenseSection(license)}

  ## Questions:
  ### If you have any questions, please contact me at:
  ### GitHub: https://github.com/${data["Username Request"]}}
  ### Email: ${data["Email Request"]}`;
}

module.exports = generateMarkdown;

// function renderLicenseInfo(license) {
// 	let licenseBadge = "";
// 	let licenseLink = "";
// 	switch (license) {
// 		case "GNU":
// 			licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
// 			licenseBadge =
// 				"`![License](https://img.shields.io/badge/License-GNU-green.svg`";
// 			break;
// 		case "Apache 2.0":
// 			licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
// 			licenseBadge =
// 				"`![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)`";
// 			break;
// 		case "ISC":
// 			licenseLink = "";
// 			licenseBadge =
// 				"`![License](https://img.shields.io/badge/License-ISC-green.svg)`";
// 			break;
// 		case "MIT":
// 			licenseLink = "https://mit-license.org/";
// 			licenseBadge =
// 				"`![License](https://img.shields.io/badge/License-MIT-green.svg)`";
// 			break;
// 		default:
// 			licenseLink = "";
// 			licenseBadge = "";
// 			break;
// 	}
// 	console.log(${license});
// 	// return licenseLink,
// }
