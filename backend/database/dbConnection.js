import mongoose from 'mongoose';

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{dbName: "Event_Mngt"}).then(()=>{
        console.log("Connected to database");
    }).catch(error=>{
        console.log("Some error occurred while connecting to database",error);
    })
}