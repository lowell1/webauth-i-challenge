const bcrypt = require("bcrypt");
const userModel = require("./user_model");

module.exports = {
    validateUserInfo: (req, res, next) => {
        if(req.body.username && req.body.username.length > 0 && req.body.password && req.body.password.length > 0)
            next();
        else
            res.status(400).json({message: "missing or invalid user information"});
    },
    validatePass: (req, res, next) => {
        userModel.getPasswordByUsername(req.body.username)
        .then(passObj => {
            if(passObj &&bcrypt.compareSync(req.body.password, passObj.password))
                next();
            else
                res.status(401).json({message: "invalid login credentials"})
        })
        .catch(() => res.status(500).json("error authenticating password"));

        // console.log(dbPassword);

    },
    restrictToLogin: (req, res, next) => {
        //replace with code to check if user is logged in
        next();
    },
    hashPassword: (req, res, next) => {
        req.body.password = bcrypt.hashSync(req.body.password, 14);
        next();
    }
}
