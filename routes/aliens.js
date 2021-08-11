const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req, res) => {
    try{
            const aliens = await Alien.find()
            res.json(aliens)
    }catch(err){
        res.send('error ' + err)
    }
})

router.post("/", async(req,res) =>{
    try{
        const adduser = new Alien ({
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            street:req.body.street,
            locality:req.body.locality,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode,
            coordinatestype:req.body.coordinatestype,
            coordinates:req.body.coordinates
        })       
        
        const a1 = await adduser.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(res,req) => {
    try{
        const alien = await Alien.updateOne({},{_id:id})
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        const a1 = await alien.delete()
        res.send('deleted')
    }catch(err){
        res.send('error')
    }
})

module.exports = router
