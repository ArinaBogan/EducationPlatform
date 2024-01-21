import ExceptionType from './exception';
import { Request, Response, NextFunction } from 'express';

function isValidUserId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error(ExceptionType.ID_IS_NOT_NUMBER);
  if (id <= 0) throw new Error(ExceptionType.ID_INVALID);
  next();
}

function isValidUserBody(req: Request, res: Response, next: NextFunction) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error(ExceptionType.USER_NAME_IS_EMPTY);
  if (!isNaN(name)) throw new Error(ExceptionType.USER_NAME_INVALID);

  if (!surname) throw new Error(ExceptionType.USER_SURNAME_IS_EMPTY);
  if (!isNaN(surname)) throw new Error(ExceptionType.USER_SURNAME_INVALID);

  if (!email) throw new Error(ExceptionType.USER_EMAIL_IS_EMPTY);
  if (!/^[\w\S+]+@[a-z]+\.[a-z]{2,5}$/gm.test(email)) throw new Error(ExceptionType.USER_EMAIL_INVALID);

  if (!pwd) throw new Error(ExceptionType.USER_PWD_IS_EMPTY);
  if (isNaN(pwd)) throw new Error(ExceptionType.USER_PWD_INVALID);
  if (pwd.length < 8) throw new Error(ExceptionType.USER_PWD_LENGTH);
  next();
}

export { isValidUserId, isValidUserBody };
