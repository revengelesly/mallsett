// const env  = require("../../../environment")();

export default class path {
    
    // static environment = env.client;
    static baseUrl = "http://localhost:3001/";

    //authentication URL
    static SIGNUP = path.baseUrl + "users/register";
    static LOGIN = path.baseUrl + "users/authenticate";
}