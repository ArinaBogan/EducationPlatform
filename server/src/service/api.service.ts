import bcrypt from 'bcrypt';
import { getUserByEmailDB, registrationUserDB } from '../repository/api.repository';
import { iUser } from '../interfaces/interfaces';
import ExceptionType from '../helper/exception';

async function registrationUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const founfUser = await getUserByEmailDB(email);
  if (founfUser.length) throw new Error(ExceptionType.API_CHECK_EMAIL);
  const salt = 10;
  const hashPWD = await bcrypt.hash(pwd, salt);
  const data = await registrationUserDB(name, surname, email, hashPWD);
  if (!data.length) throw new Error(ExceptionType.API_EMAIL_IS_NOT_CREATE);
  return data;
}

async function authorizationUser(email: string, pwd: string): Promise<iUser[]> {
  const user = await getUserByEmailDB(email);
  if (!user.length) throw new Error(ExceptionType.API_EMAIL_IS_NOT_CREATE);

  if (!(await bcrypt.compare(pwd, user[0].pwd))) throw new Error(ExceptionType.API_IS_NOT_MATCH_PASSWORD);
  return user;
}

export { registrationUser, authorizationUser };
