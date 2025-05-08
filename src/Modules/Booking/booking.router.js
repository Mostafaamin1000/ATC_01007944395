import { Router } from 'express';
import { allowTo, protectedRouter } from '../auth/auth.controller.js';
import { createBooking, deleteBooking, getallBookings, getBookingById, updateBooking } from './booking.controller.js';

const bookingRouter = Router();

bookingRouter.post('/create',protectedRouter,allowTo('user'),createBooking);
bookingRouter.get('/getall',protectedRouter,allowTo('admin'),getallBookings);
bookingRouter.get('/:id',protectedRouter,allowTo('user'),getBookingById);
bookingRouter.put('/update/:id',protectedRouter,allowTo('user','admin'),updateBooking);
bookingRouter.delete('/delete/:id',protectedRouter,allowTo('user','admin'),deleteBooking);

export default bookingRouter;
