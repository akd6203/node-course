const bcrypt = require('bcryptjs')
const express = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    
     try{
         await user.save()
         const token = await user.generateAuthToken()
         res.status(201).send( {user, token} )
 
     } catch (e){
         res.status(200).send(e)
     }
 })
 
 router.get('/users/me', auth , async (req, res) => {
     res.send(req.user)
 })
 
 router.get('/users', async (req, res) => {
     console.log(req.user)
     try{
         const users = await User.find({})
         res.status(200).send(users)
     }
     catch (e) {
         res.status(500).send(e)
     }
 })
 
router.get('/users/:id',auth,async (req, res) => {
     const _id = req.params.id
 
     try {
         const user = await User.findById(_id)
         if(!user){
             return res.status(404).send()
         }
         res.send(user)
     } catch (e) {
         res.status(500).send()
     }
 })
 
router.patch('/users/:id', async (req, res) => {
     const _id = req.params.id 
     const allowedUpdates = ['name', 'email', 'age', 'password']
     const updates = Object.keys(req.body)
     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
     
     if(!isValidOperation){
         res.status(400).json({error:"Invalid updates"})
     }
 
     try {
        //  const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true})
        const user = await User.findById(_id)
        
        updates.forEach((value) => user[value] = req.body[value])

        await user.save()

        if(!user){
             return res.status(404).send()
         }
         res.send(user)
     }
     catch (e) {
         res.status(400).send(e)
     }
 })
 
router.delete('/users/:id', async (req, res) => {
     const _id = req.params.id
     try{
         const user = await User.findByIdAndDelete(_id)
         if(!user){
             return res.status(404).send()
         }
         res.send(user)
     } catch (e) {
         res.status(500).send(e)
     }
 }) 

// AUTHENTICATION & SECURITY 
router.post('/user/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({token, user:user})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/user/logout', auth, async (req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }
    catch (e){
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }
    catch (e){
        res.status(500).send(e)
    }
})

router.delete('/users/profile/me', auth, async (req, res) => {
    try{
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send(e)
    }
}) 

router.patch('/users/profile/me', auth, async (req, res) => {
    const allowedUpdates = ['name', 'email', 'age', 'password']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if(!isValidOperation){
        res.status(400).json({error:"Invalid updates"})
    }
    try {
        const user = req.user
       
        updates.forEach((value) => user[value] = req.body[value])

        await user.save()
        res.send(user)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router