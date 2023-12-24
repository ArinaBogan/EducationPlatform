import { Response } from 'express';
import { iUser } from '../interfaces/interfaces';

function buildResponse(res: Response, code: number, message: iUser[] | string) {
  res.status(code).send(message);
}

export { buildResponse };
