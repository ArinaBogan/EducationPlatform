import request from 'supertest';
import app from '../../app';

let id;

test('post', async () => {
  const res = await request(app).post('/user').send({ name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '12456789' });
  id = res.body[0].id;
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});

test('get', async () => {
  const res = await request(app).get('/user');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});

test('getById', async () => {
  const res = await request(app).get(`/user/${id}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});

test('put', async () => {
  const res = await request(app).put(`/user/${id}`).send({ name: 'Test1', surname: 'Test1', email: 'Test1@gmail.com', pwd: '12456789' });
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
});

test('delete', async () => {
  const res = await request(app).delete(`/user/${id}`);
  console.log(res.body.length);
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
});
