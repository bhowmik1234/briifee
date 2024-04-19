import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    content:{
        type: String,
        trim: true,
    },
    sender:{
        type:String,
    },
    receiver:{
        type:String, 
    },
    filename: {
        type:String,
    }
},{timestamps:true});


export const Message = mongoose.model("Message", messageSchema);