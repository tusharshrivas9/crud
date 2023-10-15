const express = require('express')

const router = express.Router()

const user = require('../models/userSchema')




router.post("/register",async (req,res)=>{
    
  const {name,email,phone,age,password} = req.body

  if (!name|| !email || !phone || !age || !password) {
    res.status(404).json('plz fill the data')
  }

  try {
    
    const preuser = await user.findOne({email:email})
    if (preuser) {
      res.status(404).json('you have already sign in')
    } else {
      const adduser = new user({
        name,email,phone,age,password 
      })
      await adduser.save() 
      res.status(201).json(adduser)
      console.log(adduser);
    }

  } catch (error) {
    res.status(404).json(error)
  }

})

router.get("/getdata",async(req,res)=>{
  try {
    const userData = await user.find()
    res.status(201).json(userData)
    console.log(userData);
  } catch (error) {
    res.status(404).json(error)
  }

})

router.get("/getuser/:id",async(req,res)=>{
  try {
     const {id} = req.params;

     const userIndi = await user.findById({_id:id})

     res.status(201).json(userIndi)

  } catch (error) {
    res.status(404).json(error)
  }

})
// update

router.patch('/update/:id',async(req,res)=>{
  try {
    
    const {id} = req.params;

    const updateuser = await user.findByIdAndUpdate(id,req.body,{
      
      new:true
    })

    res.status(201).json(updateuser)

  } catch (error) {
    res.status(404).json(error)
  }
})

//delete
router.delete("/deleteuser/:id",async(req,res)=>{
  try {
    
    const {id} = req.params;

    const deleteuser = await user.findByIdAndDelete({_id:id})

    res.status(201).json(deleteuser)

  } catch (error) {
    res.status(422).json(error)
  }
})

module.exports = router