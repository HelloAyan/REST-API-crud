import express from 'express';
import { getUser, createUser, allUsers, updateUser } from '../controller/userController.js';

const route = express.Router();

route.get('/fetch', getUser);
route.post('/create', createUser);
route.get('/all-users', allUsers);
route.put('/update/:id', updateUser);

export default route;