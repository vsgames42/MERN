const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const empModel = require('./model/usermodel')
const sellModel = require('./model/sellschema')
const cartRoutes = require('./routes/cartRoute')
const orderModel = require('./model/orderschema')
const crypto = require('crypto')
const Razorpay = require('razorpay')

const app = express()


app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/api/cart',cartRoutes)

const razorpay = new Razorpay({
    key_id: 'rzp_test_VqxBBYkPy1xQxE',
    key_secret: 'UQKRx2ftjqzZJYfcKmnWjNQ1'
})

app.post('/create-order',async(req,res)=>{
    const {amount,currency} = req.body;

    try{
        const options = {
            amount: amount * 100, //Amount in paise
            currency,
            receipt: `receipt_${Math.floor(Math.random() * 10000)}`,
            payment_capture: 1
        }
        const order = await razorpay.orders.create(options);
        res.status(200).json({
            order_id: order.id, 
            amount: order.amount, 
            currency: order.currency
        })
    }
    catch(error){
        console.error("Error creating order :",error);
        res.status(500).send("Error creating order")
    }
})

app.post('/verify-payment',(req,res)=>{
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto.createHmac('sha256','UQKRx2ftjqzZJYfcKmnWjNQ1')//Use your razorpay secret key
    .update(body.toString())
    .digest('hex')

    if (expectedSignature === razorpay_signature)
    {
        res.status(200).json({message: 'Payment successful'})
    }
    else
    {
        res.status(400).json({message: 'Payment verification failed'})
    }
})

mongoose.connect('mongodb+srv://vichu1722000smart:XzWZUhVaGkeXPkSQ@cluster0.kdsoe.mongodb.net/fbxzone')

app.post('/register',(req,res)=>{
    empModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>console.log(err))
})

app.post('/order',(req,res)=>{
    orderModel.create(req.body)
    .then(order=>res.json(order))
    .catch(err=>console.log(err))
})

app.post('/login',(req,res)=>{
    const{email,password} = req.body;
    empModel.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.password===password)
            {
                res.json('success')
            }
            else
            {
                res.json('password is incorrect')
            }
        }
        else
        {
            res.json('no records')
        }
    })
})

app.post('/sell', async(req, res) => {
    const ProductName = req.body.ProductName
    const AuthorName = req.body.AuthorName
    const Price = req.body.Price
    const Image = req.body.Image
    const Tag = req.body.Tag
    const Link = req.body.Link

    const formData = new sellModel({
        ProductName: ProductName,
        AuthorName: AuthorName,
        Price: Price,
        Image: Image,
        Tag: Tag,
        Link: Link
    })

    try {
        await formData.save();
        res.send("Product Added")
    } catch(err) {
        console.log(err)
    }
});

app.get('/getorder',(req,res)=>{
    orderModel.find()
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

app.get('/gethome', (req,res)=>{
    sellModel.find()
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

app.delete('/drop', (req,res)=>{
    mongoose.connection.dropCollection('cartitems')
    res.send("Collection Dropped")
})

app.listen(3001,()=>{
    console.log('server is running')
})