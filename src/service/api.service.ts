import bcrypt from 'bcrypt';
import { getUserByEmailDB, registrationUserDB } from '../repository/api.repository';
import { iUser } from '../interfaces/interfaces';

async function registrationUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const founfUser = await getUserByEmailDB(email);
  if (founfUser.length) throw new Error('user already exist');
  const salt = 10;
  const hashPWD = await bcrypt.hash(pwd, salt);
  const data = await registrationUserDB(name, surname, email, hashPWD);
  if (!data.length) throw new Error('no data');
  return data;
}

async function authorizationUser(email: string, pwd: string): Promise<iUser[]> {
  const user = await getUserByEmailDB(email);
  if (!user.length) throw new Error('no data');

  if (!(await bcrypt.compare(pwd, user[0].pwd))) throw new Error('pwd id not correct');
  return user;
}

export { registrationUser, authorizationUser };
