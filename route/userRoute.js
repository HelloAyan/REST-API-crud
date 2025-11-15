import express from 'express';
import { getUser, createUser } from '../controller/userController.js';

const route = express.Router();

route.get('/fetch', getUser);
route.post('/create', createUser)

export default route;