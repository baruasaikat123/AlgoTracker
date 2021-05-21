const express = require('express')
const router = express.Router()
const User = require('../Models/user')
const Qus = require('../Models/question')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/addqustn', async(req,res) => {
    const getData = await Qus.find({})
    res.send(getData)
})

router.put('/addqustn/:id', async (req, res) => {
    let query = { status: "pending..." }
    let newvalue = { $set: { status: "Confirmed" } }
    await Qus.updateOne(query, newvalue)
})


router.post('/addqustn', async(req, res) => {
    try {
        const {category,title,link,notes,status} = req.body
        
        const question = new Qus({category,title,link,notes,status})
        await question.save()
        
        return res.status(201).json({Message: 'Added succesfully'})

    }
    catch (err) {
        console.log(err)
    }
})
/*router.post('/register', (req,res) => {

    const { name, email, mobile, password, confirm_password } = req.body

    if (!name || !email || !password || !confirm_password) {
        return res.status(422).json({Error: 'Required to fill this'})
    }
    
    User.findOne({ email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ Message: 'Email already exists' })
            }
            const user = new User({ name, email, mobile, password, confirm_password })
            user.save()
                .then(() => {
                    res.status(201).json({Message:'User registered successfully'})
                })
                .catch((err) => {
                    res.status(500).json({ Message:'Failed to register'})
                })         
        })
        .catch((err) => {console.log(err)})
})*/

router.post('/register', async (req, res) => {

    try {
        const { name, email, mobile, password, cpassword } = req.body

        if (!name || !email || !mobile || !password || !cpassword) {
            return res.status(422).json({ Error: "required" })
        }
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ Message: 'Email already exists' })
        }
        else if (password != cpassword) {
            return res.status(422).json({ Message: 'Password is not matching' })
        }
        else {
            const user = new User({ name, email, mobile, password, cpassword })
            await user.save()
            return res.status(201).json({ Message: 'User registered successfully' })
        }
    }
    catch (err) {
        console.log(err);
    }
    
})

router.post('/signin', async (req, res) => {

    try{
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({Message:'Please fill all the data'})
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            //console.log(token)
            if (isMatch) {
                let token = await userLogin.generateAuthToken()
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                return res.status(201).json()
               
            }
            else {
                return res.status(400).json()
            }
        }
        else {
            return res.status(400).json()
        }
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router