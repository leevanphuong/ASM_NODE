import mongoose from "mongoose";
const checkItem = new mongoose.Schema({
    name:String,
    price: Number,
    quantily: Number,
    status: Boolean,
    desc : String
})

export default mongoose.model('ASM', checkItem)