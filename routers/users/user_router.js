const userModel = require("./user_model");
const {validateUserInfo, hashPassword, validatePass, restrictToLogin} = require("./middleware");
const router = require("express").Router();

router.post("/register", [validateUserInfo, hashPassword], (req, res) => {
    userModel.addUser(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.status(500).json({message: "could not create user"}));
});

router.post("/login", validatePass, (req, res) => {
    //replace with code to create loggin session
    res.send("you logged in");
});

router.get("/users", restrictToLogin, (req, res) => {
    userModel.getAllUsers()
    .then(users => res.status(200).json(users))
    .catch(() => res.status(500).json({message: "could not get users"}));
});

module.exports = router;