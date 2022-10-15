const express = require('express');
// authentifie l'utilisateur à l'aide de token
const auth = require('../middleware/auth');
const router = express.Router();
// intègre les images au serveur 
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauces');

router.get('/', auth, sauceCtrl.getAllStuff);
router.post('/', auth, multer, sauceCtrl.createThing);
router.get('/:id', auth, sauceCtrl.getOneThing);
router.put('/:id', auth, multer, sauceCtrl.modifyThing);
router.delete('/:id', auth, sauceCtrl.deleteThing);
router.post('/:id/like', auth, sauceCtrl.postLikes);

module.exports = router;
