const BASE_URL = "http://localhost:5000";

const Path = {

    GET_USER_DATA: `${BASE_URL}/user/`,
    ADD_USER_DATA: `${BASE_URL}/user/create`,
    UPDATE_USER_DATA: `${BASE_URL}/user/`,
    DELETE_USER_DATA: `${BASE_URL}/user/`,

    GET_HOBBY_DATA: `${BASE_URL}/hobby/`,
    ADD_HOBBY_DATA: `${BASE_URL}/hobby/create`,
    UPDATE_HOBBY_DATA: `${BASE_URL}/hobby/`,
    DELETE_HOBBY_DATA: `${BASE_URL}/hobby/`,

}

export { Path };
