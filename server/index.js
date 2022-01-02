const mongoose= require("mongoose");
const connectDB= async()=>{
    try {
        const con = await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,});
        console.log("Connected to mongodb database " + con.connection.host);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports=connectDB;
