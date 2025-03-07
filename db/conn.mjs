import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURI=process.env.ATLAS_URI;
const db=mongoose.connection;

mongoose.connect(mongoURI);
mongoose.connection.once('open',()=>{
    console.log('connected to mongodn')
})


export default db;

