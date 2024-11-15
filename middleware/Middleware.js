import userModel from "../model/user.js"

export const isAdmin = async(req,res,next)=>{
try {
   const { email } = req.body;
  const userInfo = await userModel.findOne({email})

  if(userInfo && userInfo.roll=="Admin")
  {
    next();
    //proceed code
  }
  else{
    res.status(403).json({
        message:"access denied"
    })
  }


} catch (error) {
    res.status(500).json({
        message:"error occured"
    })
}
}