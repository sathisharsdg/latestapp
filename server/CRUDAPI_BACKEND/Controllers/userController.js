const express = require("express");
const router = express.Router();
const userdataModel = require("../Models/userModel")


router.post("/postuser", async(req,res)=>{
     try {
        const userdata = new userdataModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        const postuser = await userdata.save();
        res.status(200).json({
            msg:"Data Addedd",
            userlist: postuser
        })
     } catch (error) {
         res.status(400).json({
            msg: "error with post"
         })
     }
})



router.get("/getuser", async(req,res)=>{
      try {
         const users = await userdataModel.find();
         res.status(200).json({
            lenght: users.length,
            msg:"User selected",
            userList: users
         })
          
      } catch (error) {
          res.status(400).json({
            msg: "error"
          })
      }
})

router.delete("/delete/:id", async(req,res)=>{
     try {
        const deleteduser = await userdataModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            deletdUser : deleteduser.username,
            msg : "userDeleted"
        })
     } catch (error) {
         res.status(400).json({
            msg: "Error with deleting of user"
         })
     }
})


router.get("/getuser/:id" , async (req,res)=>{
    try {
        const user = await userdataModel.findById(req.params.id);
        res.status(200).json({
            foundUser: user.username,
            user: user
        })
    } catch (error) {
        res.status(400).json({
            msg: "Error with finding user"
         })
    }
})

router.put("/update/:id" , async(req,res)=>{
     try {
        const updateuser = await userdataModel.findByIdAndUpdate(req.params.id);
        updateuser.username = req.body.username;
        updateuser.email = req.body.email;
        updateuser.password = req.body.password;
        const finaluser = await updateuser.save();
        res.status(200).json({
            user: updateuser.username,
            msg: "user updated",
            data: finaluser
        })
     } catch (error) {
        res.status(400).json({
            msg: "Error with finding user"
         })
     }
})

module.exports = router;