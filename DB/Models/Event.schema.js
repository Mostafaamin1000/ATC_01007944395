import mongoose, { Schema, model } from 'mongoose'

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: String, 
    tags: [String],   
    image: String,    
    ticketsAvailable: {
      type: Number,
      required: true,
      min: 0
    },
    price: {
      type: Number,
      default: 0
    }
})

schema.post('init',function (doc){
    if(doc.image) doc.image = "http://localhost:3000/uploads/events/" + doc.image
    })

export const Event = model('Event', schema)


