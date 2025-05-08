import { Event } from "../../../DB/Models/Event.schema.js";
import { catchError } from "../../middlewares/catchError.js";
import { AppError } from "../../utils/appError.js";


const addEvent = catchError(async (req, res, next) => {
if(req.body.image)  req.body.image=req.file.filename
const event = new Event(req.body);
await event.save();
res.status(201).json({ message: "Event added successfully", event });
})

const getEvents = catchError(async (req, res, next) => {
const events = await Event.find();
res.status(200).json({ message: "Events retrieved successfully", events });
})

const getEvent = catchError(async (req, res, next) => {
const event = await Event.findById(req.params.id);
event || next(new AppError("Event not found"), 404);
!event || res.status(200).json({ message: "Event retrieved successfully", event });
})

const updateEvent = catchError(async (req, res, next) => {
if(req.body.image)  req.body.image=req.file.filename
const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
event || next(new AppError("Event not found"), 404);
!event || res.status(200).json({ message: "Event updated successfully", event });
})

const deleteEvent = catchError(async (req, res, next) => {
const event = await Event.findByIdAndDelete(req.params.id);
event || next(new AppError("Event not found"), 404);
!event || res.status(200).json({ message: "Event deleted successfully" });
})

export { addEvent, getEvents, getEvent, updateEvent, deleteEvent }