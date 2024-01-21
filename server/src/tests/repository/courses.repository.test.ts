import { getAllCourseDB, getCourseByIdDB, postCourseDB, updateCourseDB, deleteCourseByIdDB } from '../../repository/courses.repository';

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

describe('test getAllCoursesDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await getAllCourseDB();
    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
  });
});

describe('test getCourseByIdDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await getCourseByIdDB(1);

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
  });
});

describe('test postCourseDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await postCourseDB('TS');

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
  });
});

describe('test updateCourseDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await updateCourseDB(1, 'TS');

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
  });
});

describe('test deleteCourseByIdDB', () => {
  test('return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1 }] });
    const result = await deleteCourseByIdDB(1);

    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1 }]);
    expect(result).toHaveLength(1);
  });
});
