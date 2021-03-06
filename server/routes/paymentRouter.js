const router = require('express').Router()
const paymentCtrl = require('../controllers/paymentController')
const { auth }  = require("../middleware/auth")
const authAdmin = require("../middleware/authAdmin")

router.get('/payment',auth,authAdmin,paymentCtrl.getPayments)
router.post('/payment',auth,paymentCtrl.createPayment)

module.exports = router