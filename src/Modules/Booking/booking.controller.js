import { Booking } from "../../../DB/Models/Book.schema.js";
import { catchError } from "../../middlewares/catchError.js";
import { AppError } from "../../utils/appError.js";


const createBooking = catchError(async (req, res, next) => {
  const book = new Booking(req.body);
  await book.save();
  res.status(201).json({ message: "Booked successfully", book });
});

const getallBookings = catchError(async (req, res, next) => {
  const book = await Booking.find();
  res.status(200).json({ message: "success", book });
});

const getBookingById = catchError(async (req, res, next) => {
const book = await Booking.findById(req.params.id);
book || next(new AppError("Book not found"), 404);
!book || res.status(200).json({ message: "booking retrieved successfully", book });
})

const updateBooking = catchError(async (req, res, next) => {
  const book = await Booking.findByIdAndUpdate(req.params.id, req.body, {new: true});
  book || next(new AppError("Book not found"), 404);
  !book || res.status(200).json({ message: "booking updated successfully", book });
});

const deleteBooking = catchError(async (req, res, next) => {
  const book = await Booking.findByIdAndDelete(req.params.id);
  book || next(new AppError("Book not found"), 404);
  !book || res.status(200).json({ message: "booking deleted successfully" });
});

export { createBooking, getallBookings, getBookingById, updateBooking, deleteBooking };

