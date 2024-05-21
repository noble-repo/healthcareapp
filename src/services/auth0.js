import auth0 from 'auth0-js';
import Utils from "../utility";
import UserService from "./user";
import Utility from "../utility";

export default class Auth0Service {


    auth0 = new auth0.WebAuth({
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        redirectUri: window.location.origin,
        scope: 'openid profile email',
        responseType: 'code token id_token',
        grantType: 'password',
    });

    constructor() {
        this.signin = this.signin.bind(this);
    }

    signin(username, password) {
        let _this = this;
        return new Promise((resolve, reject) => {
            this.auth0.client.login({realm: process.env.REACT_APP_REALM, username, password},
                function (err, authResult) {
                    if (err) {
                        console.log("err==login=====", err);
                        return reject(err);
                    }
                    // setSession(authResult);
                    _this.auth0.client.userInfo(authResult.accessToken, async (err, user) => {
                        if (err) {
                            console.log("err==userInfo=====", err);
                            return reject(err);
                        }
                        let [error, response] = await Utility.parseResponse(UserService.getUserDetails({userId: user.sub}));
                        if (error)
                            return reject(error)
                        return resolve({...authResult, userDetails: response});
                    })
                }
            );
        })
    }
}