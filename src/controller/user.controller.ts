import express, { Request, Response, NextFunction } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser, createUser } from '../service/user.service';
import { buildResponse } from '../helper/buildResponse';
import { isValidUserBody, isValidUserId } from '../helper/validation';
const route = express.Router();

route.post('/', async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/', async (req: Request, res: Response) => {
  try {
    const data = await getAllUsers();
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidUserId, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidUserBody, isValidUserId, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidUserId, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
