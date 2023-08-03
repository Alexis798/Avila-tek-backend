import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () => {

    try {
        
        const conn = await mongoose.connect(process.env.DB_CNN)
        console.log(`MongoDB Connected : ${conn.connection.name}`)

    } catch (error) {
     
        console.error(`Error: ${error.message}`)
        process.exit(1)

    }
    

}