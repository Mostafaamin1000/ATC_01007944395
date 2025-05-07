import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

schema.pre('save', async function(){
 this.password = await bcrypt.hash(this.password, 10)
})

export const User = model("User", schema)