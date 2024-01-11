import { getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../../repository/user.repository';

const mClient = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const pool = { connect: jest.fn(() => mClient) };
  return { Pool: jest.fn(() => pool) };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('test getAllUsersDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }] });
    const result = await getAllUsersDB();

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Test1');
  });
});

describe('test getUserByIdDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }] });
    const result = await getUserByIdDB(1);

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].email).toBe('Test1@gmail.com');
    expect(result[0].surname).toBe('Test1');
  });
});

describe('test updateUserDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }] });
    const result = await updateUserDB(1, 'Test1', 'Test1', 'Test1@gmail.com', '123456789');

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].email).toBe('Test1@gmail.com');
    expect(result[0].surname).toBe('Test1');
    expect(result[0].name).toBe('Test1');
  });
});

describe('test deleteUserDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }] });
    const result = await deleteUserDB(1);

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].email).toBe('Test1@gmail.com');
    expect(result[0].surname).toBe('Test1');
    expect(result[0].name).toBe('Test1');
  });
});
