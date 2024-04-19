import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type:String,
    },
}, {timestamps: true});

export const User =   mongoose.model("User", userSchema);