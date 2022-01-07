const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) =>  {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, 'mysecret')
        const user = await User.findOne({_id: decoded._id, 'tokens.token':token})

        if (!user){
            throw new Error()
        }
        req.token = token
        req.user = user // save that user for request handlers
        next()
    }
    catch (e) {
        res.status(401).send({error:'Authentication failed'})
    }
}

module.exports = auth