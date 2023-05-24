const express = require('express');
const router = express.Router();
const products = require('../Controllers/Products')
const email = require('../Controllers/EmailListing')
const userAuth = require('../Controllers/UserAuth')
const upload_file = require('../Middleware/multer')
const auth = require('../Middleware/auth')





router.post('/create',upload_file,products.create_product)

router.get('/serve',products.getAllProducts)

router.get('/details/:id',products.getOneProduct)

router.post('/delete/:id',products.deleteProduct)

router.delete('/delete',products.deleteAllProduct)

router.post('/email',email.getAllEmail)

router.post('/register',userAuth.register)

router.post('/login',userAuth.login)

router.get('/dashboard',auth,(req,res) => {
    res.status(200).json('done')
})




module.exports = router