// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseInfo(license) {
	let licenseBadge = "";
	let licenseLink = "";
	switch ((license, badge)) {
		case "GNU":
			licenseLink = "";
			licenseBadge = "";
			break;
		case "Apache 2.0":
			licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
			licenseBadge = "";
			break;
		case "ISC":
			licenseLink = "";
			licenseBadge = "";
			break;
		case "GNU":
			licenseLink = "";
			licenseBadge = "";
			break;
		case "MIT":
			licenseLink = "https://mit-license.org/";
			licenseBadge = "";
			break;
		case "GPL v3.0":
			licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
			licenseBadge = "";
			break;
		default:
			licenseLink = "";
			licenseBadge = "";
			break;
	}
	return licenseLink;
	return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseSection = "";
	if (license) {
		licenseSection = "License: $(license}";
	} else {
		licenseSection = "";
	}
	return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {}

module.exports = generateMarkdown;
