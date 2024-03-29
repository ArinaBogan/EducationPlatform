const ExceptionType = {
  DB_GET_USER_NOT_FOUND: 'table user is empty',
  DB_GET_USER_BY_ID_NOT_FOUND: 'user by id is not found',
  DB_PUT_USER_NOT_UPDATE: 'user does not update',
  DB_DELETE_USER_NOT_DELETE: 'user does not delete',
  DB_POST_USER_NOT_CREATE: 'user does not create',

  DB_GET_COURSES_NOT_FOUND: 'table course is empty',
  DB_GET_COURSES_BY_ID_NOT_FOUND: 'course by id is not found',
  DB_PUT_COURSES_NOT_UPDATE: 'course does not update',
  DB_POST_COURSES_NOT_UPDATE: 'course does not create',
  DB_DELETE_COURSES_NOT_DELETE: 'course does not delete',

  ID_INVALID: 'id can not be negative number',
  ID_IS_NOT_NUMBER: 'id must be number',

  USER_NAME_INVALID: 'name is not correct',
  USER_NAME_IS_EMPTY: 'no name',
  USER_SURNAME_INVALID: 'incorrect surname',
  USER_SURNAME_IS_EMPTY: 'no surname',
  USER_EMAIL_INVALID: 'incorrect email',
  USER_EMAIL_IS_EMPTY: 'no email',
  USER_PWD_INVALID: 'incorrect pwd',
  USER_PWD_LENGTH: 'pwd length must be more than 8 symbols',
  USER_PWD_IS_EMPTY: 'no pwd',

  API_CHECK_EMAIL: 'user already exist',
  API_EMAIL_IS_NOT_CREATE: 'email does not create',
  API_IS_NOT_MATCH_PASSWORD: 'password does not match',
};

export default ExceptionType;
