import auth0 from 'auth0-js';

export default class Auth {
    constructor(history) {
        this.history = history;
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
            responseType: 'token id_token',
            scope: 'openid profile'
        });
    }

    login = () => {
        this.auth0.authorize(); // redirect to auth0 login page
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.history.push('/');
            } else if (err) {
                this.history.push('/')
                alert('Error: ' + err.error + '. Check the console for further details.');
            }
        })
    }

    setSession = authResult => {
        // set the time that the access token will expire
        const expiresAt = JSON.stringify(
            authResult.expiresIn + 1000 + new Date().getTime()
        );

        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getDate() < expiresAt;
    }

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.auth0.logout({
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            returnTo: 'http://localhost:3000'
        });
    }
}