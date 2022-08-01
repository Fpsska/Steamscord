const { Router } = require('express');

const router = Router();
const steamController = require('../controllers/steam.controller');



router.get('/', steamController.getSteamUsersData);




module.exports = router;