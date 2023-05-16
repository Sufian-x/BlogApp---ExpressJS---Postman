const exp = require('express')
const {getUsers, signup, login} = require('../controller/controller')
const router = exp.Router();

router.get('/getUsers', getUsers);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;