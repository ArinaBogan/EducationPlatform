import { iCourses } from '../interfaces/interfaces';
import { getAllCoursesDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseDB } from '../repository/courses.repository';

async function getAllCourses(): Promise<iCourses[]> {
  const data = await getAllCoursesDB();
  if (!data.length) throw new Error('no data');
  return data;
}

async function getCourseById(id: number): Promise<iCourses[]> {
  const data = await getCourseByIdDB(id);
  if (!data.length) throw new Error('no data');
  return data;
}

async function createCourse(course: string): Promise<iCourses[]> {
  const data = await createCourseDB(course);
  if (!data.length) throw new Error('no data');
  return data;
}

async function updateCourse(id: number, course: string): Promise<iCourses[]> {
  const data = await updateCourseDB(id, course);
  if (!data.length) throw new Error('no data');
  return data;
}

async function deleteCourse(id: number): Promise<iCourses[]> {
  const data = await deleteCourseDB(id);
  if (!data.length) throw new Error('no data');
  return data;
}

export { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
