const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        let folder = path.join(__dirname, '../public/images/products');
        cb(null, folder);
    },
    filename: (req,file,cb) => {
        let fileName = 'product_' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});
const uploadFile = multer({ storage });

router.get('/', productsController.list);

router.get('/create', productsController.create);
router.post('/create', uploadFile.single('image'), productsController.processCreate);

router.get('/detail/:id', productsController.detail);
router.delete('/detail/:id', productsController.delete);

router.get('/edit/:id', productsController.edit);
router.post('/edit/:id', uploadFile.single('image'), productsController.processEdit);

module.exports = router;