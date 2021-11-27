const Payment = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')


const getPayments = async (req,res)=>{
    try {
        const payments = await Payment.find()
        res.json(payments)
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const createPayment = async (req,res)=>{
    try {
        const user = await Users.findById(req.user.id).select('name email')
        if(!user)  return res.status(400).json({message:"user does not exist"})
        const {cart,paymentID,address} = req.body
        const {_id,name,email} = user
        const newPayment=  new Payment({
            user_id:_id,name,email,cart,paymentID,address
        })
        res.json({newPayment})
        newPayment.save()
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = {
    getPayments,
    createPayment
}