# team-profile-generator

DESCRIPTION

This application was built to allow users to generate a team profile based on thier input in the command line using the Inquirer module from Node.js.
Once the user has input all the desired information, it will be displayed on a newly created html page with a style sheet. 
This project also demonstrates the use of OOP and TDD using Jest.
To check out the project files, visit my GitHub page: https://github.com/JelyseCalkum/team-profile-generator 
 
INSTALLATION

The user should clone the repository from GitHub and download Node. 
This application also requires a file system and inquirer module. If testing is required, this application uses Jest.

USER STORY

AS A manager, I WANT to generate a webpage that displays my team's basic info, SO THAT I have quick access to their emails and GitHub profiles.

ACCEPTANCE CRITERIA

GIVEN a command-line application that accepts user input. 
WHEN I am prompted for my team members and their information, THEN an HTML file is generated that displays a nicely formatted team roster based on user input.
WHEN I click on an email address in the HTML, THEN my default email program opens and populates the TO field of the email with the address.
WHEN I click on the GitHub username, THEN that GitHub profile opens in a new tab.
WHEN I start the application, THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number.
WHEN I enter the team manager’s name, employee ID, email address, and office number, THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team.
WHEN I select the engineer option, THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.
WHEN I select the intern option, THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.
WHEN I decide to finish building my team, THEN I exit the application, and the HTML is generated.

USAGE

Use inquirer from your command line to answer questions about your project. View walk through video here: https://drive.google.com/file/d/1R1ro3l-ogHnixdgRYNMuKSJYzrcmLBjF/view

LICENSE

This project is licensed under MIT.

ACKNOWLEDGEMENTS

Thank you to UofO Coding Bootcamp for providing me with the knowledge and tools I needed to complete this project.
