import express, { Router } from 'express';
import dotenv from 'dotenv';
import dbconnect from './config/database.js';
import router from './routes/feedbackRouts.js';

const app =express();

const PORT=4001;
app.use(express.json());

//mounting api 
app.use("/api/v1",router)
dotenv.config();



dbconnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})