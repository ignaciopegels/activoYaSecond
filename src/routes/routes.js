const express = require ("express")
const router = express.Router();
const controller = require ("../controllers/mainController")

router.get('/', controller.home)

router.get('/home', controller.home)

router.get('/register', controller.register);

router.get('/login', controller.login);

router.get('/products', controller.products);

router.get('/shop', controller.shop);

router.get('/aboutUs', controller.aboutUs);

router.post('/datos', controller.datos);

module.exports = router;