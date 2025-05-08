import authRouter from "./auth/auth.router.js"
import bookingRouter from "./Booking/booking.router.js"
import eventRouter from "./Event/event.router.js"
import userRouter from "./User/user.router.js"


export const bootstrap =(app)=>{
app.use('/api/auth',authRouter)
app.use('/api',userRouter)
app.use('/api/event',eventRouter)
app.use('/api/booking',bookingRouter)
}