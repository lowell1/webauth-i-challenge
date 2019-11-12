const db = require("../../data/db.js");

module.exports = {
    addUser: userInfo => {
        return db("users").insert(userInfo);
    },    
    getPasswordByUsername: username => {
        return db("users").select("password").where({username: username}).first();
    },
    getAllUsers: () => {
        return db("users").select("*");
    }
}
