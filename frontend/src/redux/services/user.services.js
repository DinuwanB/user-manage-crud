import Axios from "axios";

//user list endpoint
export const fetchUserList = async (filters) => {
  const keyword =
    filters && filters !== undefined ? `?keyword=${filters}` : "";
  const data = await Axios.get(
    `http://localhost:4002/api/v1/user/list?${keyword}`
  );
  return data;
};

//create user endpoint
export const fetchCreateUser = async (data) => {
  const { response, error } = await Axios.post(
    "http://localhost:4002/api/v1/user/add",
    data
  );
  if (response) {
    return response;
  }
  if (error) {
    return error;
  }
};

//user detail endpoint
export const fetchUserDetail = async (id) => {
  const data = await Axios.get(
    `http://localhost:4002/api/v1/user/detail/${id}`
  );
  return data;
};

//user edit endpoint
export const fetchUserEdit = async (data, id) => {
  data._id = id;
  const response = await Axios.put(
    `http://localhost:4002/api/v1/user/update`,
    data
  );
  return response;
};

//delete endpoint
export const fetchDeleteUser = async (id) => {
  const response = await Axios.delete(
    `http://localhost:4002/api/v1/user/delete/${id}`
  );
  return response;
};
