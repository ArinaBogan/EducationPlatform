import * as repository from '../../repository/user.repository';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../../service/user.service';
import ExceptionType from '../../helper/exception';

describe('getAllUsers', () => {
  test('return success', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUsersDB');
    repFunction.mockResolvedValue([
      { id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' },
      { id: 2, name: 'Test2', surname: 'Test2', email: 'Test2@gmail.com', pwd: '123456789' },
    ]);
    const result = await getAllUsers();
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].name).toBe('Test1');
    expect(result[1].name).toBe('Test2');
    expect(result[0].pwd).toBe('123456789');
    expect(result[1].pwd).toBe('123456789');
    expect(result).toEqual([
      { id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' },
      { id: 2, name: 'Test2', surname: 'Test2', email: 'Test2@gmail.com', pwd: '123456789' },
    ]);
    expect(result).toHaveLength(2);
  });

  test('return error', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUsersDB');
    repFunction.mockResolvedValue([]);
    try {
      await getAllUsers();
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_USER_NOT_FOUND);
    }
  });
});

describe('getUserById', () => {
  test('return success', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByIdDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    const result = await getUserById(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Test1');
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
  });

  test('return error', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByIdDB');
    repFunction.mockResolvedValue([]);
    try {
      await getUserById(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_USER_BY_ID_NOT_FOUND);
    }
  });
});

describe('updateUser', () => {
  test('return success', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    const result = await updateUser(1, 'Test1', 'Test1', 'Test1@gmail.com', '123456789');
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].name).toBe('Test1');
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
  });

  test('return error', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await updateUser(1, 'Test1', 'Test1', 'Test1@gmail.com', '123456789');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_PUT_USER_NOT_UPDATE);
    }
  });
});

describe('deleteUser', () => {
  test('retutrn success', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    const result = await deleteUser(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].surname).toBe('Test1');
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
  });

  test('return error', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await deleteUser(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_DELETE_USER_NOT_DELETE);
    }
  });
});
