class URLs {
    static server = "http://localhost:5000/";
    
    static userLogIn = URLs.server + "api/login";
    static userSignUp = URLs.server + "api/signup";
    static userJWT = URLs.server + "api/secret";

    static jobs = URLs.server + "api/jobs";
}


export default URLs;