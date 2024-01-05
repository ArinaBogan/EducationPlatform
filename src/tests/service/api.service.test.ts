import ExceptionType from '../../helper/exception';
import * as repository from '../../repository/api.repository';
import { registrationUser, authorizationUser } from '../../service/api.service';
import bcrypt from 'bcrypt';

describe('registrationUser test', () => {
    test('return success', async () => {
        const mockCheckEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockCheckEmail.mockResolvedValue([]);

        const bcryptHash = jest.spyOn(bcrypt, 'hash');
        bcryptHash.mockResolvedValue('123')
        const mockRegistration = jest.spyOn(repository, 'registrationUserDB');
        mockRegistration.mockResolvedValue([{
            id: 1,
            name: 'Test1',
            surname: 'Test1',
            email: 'Test@gmail.com',
            pwd: '123456789',
        },])
        const result = await registrationUser('Test1', 'Test1', 'Test@gmail.com', '123456789');
        expect(mockCheckEmail).toHaveBeenCalled();
        expect(mockRegistration).toHaveBeenCalled();
        expect(result[0].name).toBe('Test1');
        expect(result).toEqual([
            { id: 1, name: 'Test1', surname: 'Test1', email: 'Test@gmail.com', pwd: '123456789' },]
        );

        expect(bcryptHash).toHaveBeenCalled();
    });
    test('return error checkEmail', async () => {
        const mockCheckEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockCheckEmail.mockResolvedValue([{
            id: 1,
            name: 'Test1',
            surname: 'Test1',
            email: 'Test@gmail.com',
            pwd: '123456789',
        },]);
        try {
            await registrationUser('Test1', 'Test1', 'Test@gmail.com', '123456789');
        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.API_CHECK_EMAIL);
        }
    });
    test('return error registration', async () => {
        const mockRegistration = jest.spyOn(repository, 'registrationUserDB');
        mockRegistration.mockResolvedValue([]);
        try {
            await registrationUser('Test1', 'Test1', 'Test@gmail.com', '123456789');
        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.API_CHECK_EMAIL);
        }
    });
});

describe('authorizationUser', () => {
    test('return success', async () => {
        const mockCheckEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockCheckEmail.mockResolvedValue([
            {
                id: 1,
                name: 'Test1',
                surname: 'Test1',
                email: 'Test@gmail.com',
                pwd: '123456789',
            }
        ]);

        const bcryptHash = jest.spyOn(bcrypt, 'compare');
        bcryptHash.mockResolvedValue(true);

        const result = await authorizationUser('Test@gmail.com', '123456789');
        expect(mockCheckEmail).toHaveBeenCalled();
        expect(bcryptHash).toHaveBeenCalled();
        expect(result[0].id).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Test1');
        expect(result).toEqual([
            {
                id: 1,
                name: 'Test1',
                surname: 'Test1',
                email: 'Test@gmail.com',
                pwd: '123456789',
            },
        ]);
    });

    test('return error email', async () => {
        const mockCheckEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockCheckEmail.mockResolvedValue([]);
        try {
            await authorizationUser('Test@gmail.com', '123456789')
        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.API_EMAIL_IS_NOT_CREATE)
        }
    });

    test('return error pwd', async () => {
        const mockCheckEmail = jest.spyOn(repository, 'getUserByEmailDB');
        const bcryptHash = jest.spyOn(bcrypt, 'compare');
        bcryptHash.mockResolvedValue(false);
        mockCheckEmail.mockResolvedValue([
            {
                id: 1,
                name: 'Test1',
                surname: 'Test1',
                email: 'Test@gmail.com',
                pwd: '123456789',
            },
        ]);
        try {
            await authorizationUser('Test@gmail.com', '123456789');
        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.API_IS_NOT_MATCH_PASSWORD);
        }
    })
});