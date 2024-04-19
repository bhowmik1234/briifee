import mongoose from "mongoose"

const connect = async () =>{
    try {
        const connection = await mongoose.connect("mongodb+srv://briefcase:briefcase123@cluster0.16uo14g.mongodb.net/");
        // console.log(connection);
        console.log("connected to database.");
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

export default connect;