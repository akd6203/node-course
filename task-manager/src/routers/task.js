const express = require('express')
const Task = require('../models/task')
const Auth = require('../middleware/auth')
router = new express.Router()

router.post('/tasks', Auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner:req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(error)
    }
})

module.exports = router

router.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id 

    try{
        const task = await Task.findById(_id)
        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }
    catch (e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id 
    const allowedUpdates = ['completed', 'description']
    const updates = Object.keys(req.body)
    const isAllowed = updates.every((val) => allowedUpdates.includes(val))
    
    if(!isAllowed){
        res.status(400).send({error:"Invalid update"})
    }

    try{
        // const task = await Task.findByIdAndUpdate(_id, req.body, {new:true, runValidators:true})

        const task = await Task.findById(_id)
        updates.forEach((val) => task[val] = req.body[val])

        await task.save()

        if(!task){
            res.status(404).send()
        }
        res.send(task)
    } 
    catch (e) {
        res.status(500).send(e)
    }
})


router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const task = await Task.findByIdAndDelete(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})