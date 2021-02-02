const path = require('path')

const express = require('express')

const {check, body} = require('express-validator/check')

const adminController = require('../controllers/admin')
const isAuth = require('../middleware/is-auth')

const router = express.Router()

router.get('/add-product', isAuth, adminController.getAddProduct)

router.get('/products', isAuth, adminController.getProducts)

router.post(
    '/add-product', 
    [
    body('title')
        .isAlphanumeric()
        .isLength({ min: 3 })
        .trim()
        .withMessage('Product title must be 3 characters long and must be alphanumeric.'),
    body('imageUrl')
        .isURL()
        .withMessage('Image must be a url link.'),
    body('price')
        .isFloat()
        .withMessage('Price must be a number and contain only one decimal.'),
    body('description')
        .isLength({min: 5, max: 400 })
        .trim()
        .withMessage('Description must be between 5 and 400 characters.')
    ], 
    isAuth, adminController.postAddProduct
)

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct)

router.post(
    '/edit-product', 
    [
    body('title')
        .isAlphanumeric()
        .isLength({ min: 3 })
        .trim()
        .withMessage('Product title must be 3 characters long and must be alphanumeric.'),
    body('imageUrl')
        .isURL()
        .withMessage('Image must be a url link.'),
    body('price')
        .isFloat()
        .withMessage('Price must be a number and contain only one decimal.'),
    body('description')
        .isLength({min: 5, max: 400 })
        .trim()
        .withMessage('Description must be between 5 and 400 characters.')
    ], 
    isAuth, adminController.postEditProduct)

router.post('/delete-product', isAuth, adminController.postDeleteProduct)

module.exports = router 