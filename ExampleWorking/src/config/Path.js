// const env  = require("../../../environment")();

export default class path {
    
    // static environment = env.client;
    static baseUrl = "http://localhost:7000/";

    //authentication URL
    static SIGNUP = path.baseUrl + "api/user/signup";
    static LOGIN = path.baseUrl + "api/signin";
}