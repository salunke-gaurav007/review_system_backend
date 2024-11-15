import User from '../model/user.js';

export const createAdmin =async (req,res) => {
    try{
    const {name,email,password}=req.body;
    const user =new User({
      name,email,password,role:"Admin"
    })
  
    const saveduser =await user.save();
    res.json({
      saveduser,
      message:"Admin created successfully"
    })
  }catch(error) {
      error :"Error occured"
  }}

 

export const createAlumni =async (req,res) => {
    try{
    const {name,email,password}=req.body;
    const user =new User({
      name,email,password,role:"Alumni",
    })
  
    const saveduser =await user.save();
    res.json({
      saveduser,
      message:"Alumni created successfully"
    })
  }catch(error) {
      error :"Error occured"
  }}

  export const createstudent =async (req,res) => {
    try{
    const {name,email,password}=req.body;
    const user =new User({
      name,email,password,role:"Student",
    })
  
    const saveduser =await user.save();
    res.json({
      saveduser,
      message:"Student created successfully"
    })
  }catch(error) {
   
      console.log(`the error ${error}`);
  }}

  export const getAllUsers =async(req,res) => {
    try{
        const getusers =await User.find()
        res.json({
            getusers
        })
    }
    catch(error) {
            res.json({
                error:`error: ${error.message}`
            })
    }
  }