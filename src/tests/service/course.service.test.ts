import { deleteCourseById, getAllCourse, getCourseById, postCourse, updateCourse } from "../../service/courses.service";
import * as repository from '../../repository/courses.repository';
import exp from "constants";

describe('getAllCourse', () => {
    test('return success', async () => {
        const repFunction = jest.spyOn(repository, 'getAllCourseDB');
        repFunction.mockResolvedValue([
            { id: 1, course: 'TS' },
            { id: 2, course: 'JS' }
        ]);
        const result = await getAllCourse();
        expect(repFunction).toHaveBeenCalled();
        expect(result[0].id).toBe(1);
        expect(result[1].id).toBe(2);
        expect(result[0].course).toBe('TS');
        expect(result[1].course).toBe('JS');
        expect(result).toEqual([
            { id: 1, course: 'TS' },
            { id: 2, course: 'JS' }
        ]);
        expect(result).toHaveLength(2);
    });

    test('return error', async () => {
        const repFunction = jest.spyOn(repository, 'getAllCourseDB');
        repFunction.mockResolvedValue([]);
        try {
            await getAllCourse()
        } catch (error: any) {
            expect(error.message).toBe('ExceptionType.DB_GET_COURSES_NOT_FOUND')
        }
    });
});

describe('getCourseById', () => {
    test('return success', async () => {
        const repFunction = jest.spyOn(repository, 'getCourseByIdDB');
        repFunction.mockResolvedValue([
            { id: 1, course: 'TS' }
        ]);
        const result = await getCourseById(1);
        expect(result[0].id).toBe(1);
        expect(repFunction).toHaveBeenCalled();
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: 1, course: 'TS' }])
    });
    test('return error', async () => {
        const repFunction = jest.spyOn(repository, 'getCourseByIdDB');
        repFunction.mockResolvedValue([]);
        try {
            await getCourseById(1)
        } catch (error: any) {
            expect(error.message).toBe('')
        }
    });

});

describe('createCourse', () => {
    test('test return success', async () => {
        const repFunction = jest.spyOn(repository, 'postCourseDB');
        repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
        const result = await postCourse('TS');
        expect(repFunction).toHaveBeenCalled();
        expect(result[0].course).toBe('TS');
        expect(result).toEqual([{ id: 1, course: 'TS' }]);
        expect(result).toHaveLength(1);
        expect(result.length).toBe(1);
    });

    test('test return error', async () => {
        const repFunction = jest.spyOn(repository, 'postCourseDB');
        repFunction.mockResolvedValue([]);
        try {
            await postCourse('TS')
        } catch (error: any) {
            expect(error.message).toBe('ExceptionType.DB_POST_COURSES_NOT_UPDATE')
        }
    });
});

describe('updateCourse', () => {
    test('return success', async () => {
        const repFunction = jest.spyOn(repository, 'updateCourseDB');
        repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
        const result = await updateCourse(1, 'TS');
        expect(repFunction).toHaveBeenCalled();
        expect(result[0].course).toBe('TS');
        expect(result[0].id).toBe(1);
        expect(result).toEqual([{ id: 1, course: 'TS' }]);
        expect(result).toHaveLength(1);
    });

    test('test return error', async () => {
        const repFunction = jest.spyOn(repository, 'updateCourseDB');
        repFunction.mockResolvedValue([]);
        try {
            await updateCourse(1, 'TS');
        } catch (error: any) {
            expect(error.message).toBe('ExceptionType.DB_PUT_COURSES_NOT_UPDATE')
        }
    });
});

describe('deleteCourse', () => {
    test('retutrn success', async () => {
        const repFunction = jest.spyOn(repository, 'deleteCourseByIdDB');
        repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
        const result = await deleteCourseById(1);
        expect(repFunction).toHaveBeenCalled();
        expect(result[0].course).toBe('TS');
        expect(result[0].id).toBe(1);
        expect(result).toEqual([{ id: 1, course: 'TS' }]);
        expect(result).toHaveLength(1);
    });

    test('return error', async () => {
        const repFunction = jest.spyOn(repository, 'deleteCourseByIdDB');
        repFunction.mockResolvedValue([]);
        try {
            await deleteCourseById(1);
        } catch (error: any) {
            expect(error.message).toBe('ExceptionType.DB_DELETE_COURSE_NOT_DELETE')
        }
    })
})