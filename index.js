import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import questionRoute from './routes/routes.js'



const app = express();

dotenv.config();

const port = process.env.PORT || 8080

app.use(express.json());
app.use("/api", questionRoute)

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connected')
        
    } catch (error) {
        throw error;
        
    }
}

dbConnect().then(()=>
app.listen(port, ()=>{
    
    console.log(`Server is connected to http://localhost:${port}`);
    
})
)
