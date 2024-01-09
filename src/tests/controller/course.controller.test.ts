import request from 'supertest';
import app from '../../app';

let id;
const endPointURL = '/courses';

test('post', async () => {
  const res = await request(app).post(endPointURL).send({ course: 'TS' });
  id = res.body[0].id;
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
});

test('get', async () => {
  const res = await request(app).get(endPointURL);
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});

test('getByID', async () => {
  const res = await request(app).get(`/courses/${id}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
});

test('update', async () => {
  const res = await request(app).put(`/courses/${id}`).send({ course: 'JS' });
  console.log(res);
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveLength(1);
});
