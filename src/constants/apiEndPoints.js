export const AUTH_VALIDATE = {
  url: 'api/auth/token/validate',
  method: 'post',
};

export const AUTH_LOGIN = {
  url: 'api/auth/login',
  method: 'post',
};

export const AUTH_REGISTER = {
  url: 'api/auth/users',
  method: 'post',
};

export const AUTH_FORGOT_PASSWORD = {
  url: 'api/auth/users/reset_password',
  method: 'post',
};

export const GET_CONTENTS = {
  url: 'api/content',
  method: 'get',
};

export const CREATE_CONTENT = {
  url: 'api/content',
  method: 'post',
};

export const UPDATE_CONTENT = contentId => ({
  url: `api/content/${contentId}`,
  method: 'patch',
});

export const DELETE_CONTENT = contentId => ({
  url: `api/content/${contentId}`,
  method: 'delete',
});

export const CREATE_CONTENT_DATA = {
  url: 'api/content/data',
  method: 'post',
};

export const CREATE_CONTENT_TYPE = {
  url: 'api/content/type',
  method: 'post',
};

export const UPDATE_CONTENT_DATA = contentDataId => ({
  url: `api/content/data/${contentDataId}`,
  method: 'patch',
});

export const DELETE_ENTRY = contentDataId => ({
  url: `api/content/data/${contentDataId}`,
  method: 'delete',
});

export const CREATE_CONTENT_FIELD = {
  url: 'api/content/type',
  method: 'post',
};

export const UPDATE_CONTENT_FIELD = contentTypeId => ({
  url: `api/content/type/${contentTypeId}`,
  method: 'patch',
});

export const DELETE_CONTENT_FIELD = contentTypeId => ({
  url: `api/content/type/${contentTypeId}`,
  method: 'delete',
});
