import mongoose from "mongoose";
const dbConnect=async()=>{
    try {
        await mongoose .connect(process.env.MONGODB_URL)
        console.log("MongoDB connected Successfully")
    } catch (error){
        console.log("Connection Failed",error)
    }
}

export default dbConnect;