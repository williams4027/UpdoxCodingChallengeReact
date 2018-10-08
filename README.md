# UpdoxCodingChallengeReact
The React portion of the Updox Coding Challenge to create a Provider Directory.
This was based on the starter create-react-app project and modified based on the project statement.
This was implemented using a Redux pattern for easier maintainability as the app would grow.

## Project Directory Structure
**src/** The main index.js file lives here, creating an initial state/redux store for rendering the app root  
**src/css/** Holds all style assets  
**src/js/** Holds all javascript assets  
**actions/** Contains the redux actions used for the ProviderForm and ProviderTable to  
**components/** All source code for react components  
**constants/** Definition file to hold string constants for the Action classes for easier editing  
**model/** Contains the ProviderData object for data transfer inside the ProviderForm  
**reducers/** Holds all redux reducers, who take the actions and payloads and generates new states if needed  
**store/** Simple redux store configuration to bring the pieces together  

# Run
Ensure that npm is installed on the computer and run `npm install && npm start` from the project root.
This should install all required node modules, and start up the React web development server.

# Testing
Due to time constraints, I was not able to add any meaningful test suites for the project.
I would have liked to go in and learned how to create enzyme and jest tests to test the redux and
regular component operations at a unit level but ran out of time.
