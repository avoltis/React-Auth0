This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
Create config variables in  project root on .env file taking them from auth0 site: 

REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000/callback
REACT_APP_AUTH0_AUDIENCE=http://localhost:3001
REACT_APP_API_URL=http://localhost:3001

Whitelist http://localhost:3000/callback and create API: http://localhost:3001 on auth0 site.

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view Client in the browser.
Open [http://localhost:3001](http://localhost:3001) to view API in the browser.
