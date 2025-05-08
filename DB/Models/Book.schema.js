import mongoose , { Schema , model } from "mongoose"

const schema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      status: {
        type: String,
        enum: ['booked', 'cancelled'],
        default: 'booked'
      }
},{timestamps:true})



export const Booking = model('Booking', schema)