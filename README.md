## Instructions

Create an app that does the following:

- Reads data from the attached JSON file
    - Done with the following code (on line 4 of App.tsx)
    - (`import menuData from './menu-data.json';`)
- Render a list of all the items
- Allow the item to be clicked, and bring you to a new page
- On the new page, show the item, and allow editing of:
    - price
    - isAvailable
- Save the changes using React "setState"
- Button to go back to main list page
- On every update, log the full menu to the console

Then, write some unit tests for the components you made
 (https://create-react-app.dev/docs/running-tests)


Couple things I want to see:

- Add a "router" library to handle the page changes (https://create-react-app.dev/docs/adding-a-router)
- Use some stateless components for data display
- Using local state to hold the updated items
- Use CSS to make the components look good (nothing crazy, but just somewhat presentable)
- Have at least 75% unit test coverage (`npm run coverage`)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
