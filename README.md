# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

# ch9_baxley_README_generator

Challenge 9 README Generator

## Description

This project was the utilization of Node.js to create README.md file through user input in the terminal. This project is not deployable so a screencastify video can demonstrate its functioning (https://kaneknah.github.io/ch5_baxley_calendar/). The project utilizes the command line to generate questions for the user to answer. These responses are then written to a newREADME.md file though the use of Node.js and the writeToFile functions. Once the application is finished. The newREADME.md file will appear in the repo for reviewing.

The code itself utilizes an array to create the user questions and then passes them and their answers through a renderMarkdown function. all of this utilizes the new node.js fs.writeToFile and exporting features as well as the 'require' feature to connect data from multiple sources together.

The fact that this project utilized no CSS and HTML coding greatly increased the speed in writing the application. Besides several catches with one specific function, this project was perhaps the fastest to complete of all of the challenges so far. this, however, does not mean it was not challenging in utilizing the new Node.js syntax and code.

## Installation

The user must first select the package.json file and open it in the integrated terminal and enter "npm i" to install the needed node modules for this application to work.

## Usage

This project can be initiated by typing 'node index' into the terminal(after installation). The user will be prompted to answer several questions regarding the Title, Description, Installation, Usage, Contribution, Testing, License, and Questions sections of the README. as the user inputs and selects the answers for these questions, as well as other identifying information, the application will then generate a clean README file displaying this information in a .md format.

![Alt text](./assets/images/simple-calendar.jpg)

## Credits

Starter Code provided by Berkely Bootcamp.

## License

N/A
