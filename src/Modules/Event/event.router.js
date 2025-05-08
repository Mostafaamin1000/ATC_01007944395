import { Router } from 'express';
import { addEvent, deleteEvent, getEvent, getEvents, updateEvent } from './event.controller.js';
import { allowTo, protectedRouter } from '../auth/auth.controller.js';
import { uploadSinleFile } from '../../fileUpload/fileUpload.js';

const eventRouter = Router();

eventRouter.post('/create',protectedRouter,allowTo('admin'),uploadSinleFile('image','events'),addEvent)
eventRouter.get('/',protectedRouter,allowTo('admin','user'),getEvents)
eventRouter.get('/',protectedRouter,allowTo('admin','user'),getEvent)
eventRouter.put('/update/:id',protectedRouter,allowTo('admin'),uploadSinleFile('image','events'),updateEvent)
eventRouter.put('/delete/:id',protectedRouter,allowTo('admin'),deleteEvent)

export default eventRouter;





