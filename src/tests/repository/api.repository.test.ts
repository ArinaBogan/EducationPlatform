import { getUserByEmailDB, registrationUserDB } from '../../repository/api.repository';

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

describe('test getUserByEmailDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1', pwd: 'Test1' }] });
    const result = await getUserByEmailDB('Test1');

    expect(mClient.query).toHaveBeenCalled();
    expect(result[0].email).toBe('Test1');
    expect(result[0].name).toBe('Test1');
    expect(result[0].surname).toBe('Test1');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1', pwd: 'Test1' }]);
  });
});

describe('test registrationUserDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1', pwd: 'Test1' }] });
    const result = await registrationUserDB('Test1', 'Test1', 'Test1', 'Test1');

    expect(mClient.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Test1');
    expect(result[0].surname).toBe('Test1');
    expect(result[0].email).toBe('Test1');
    expect(result[0].pwd).toBe('Test1');
    expect(result).toEqual([{ id: 1, name: 'Test1', surname: 'Test1', email: 'Test1', pwd: 'Test1' }]);
    expect(result).toHaveLength(1);
  });
});
