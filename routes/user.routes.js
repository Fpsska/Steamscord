const { Router } = require("express");

const router = new Router();
const steamController = require("../controllers/user.controller");

router.get("/", steamController.getUsersData);

module.exports = router;
