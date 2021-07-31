import axios from "axios";
import { Path } from "../config/Path";

const getUserData = async () => {
    const { data } = await axios.get(`${Path.GET_USER_DATA }`);
    return data;
  };
  const addUserData = async (payLoad) => {
    const { data } = await axios.post(`${Path.ADD_USER_DATA}`,payLoad);
    return data;
  };
  const updateUserData = async (id,payLoad) => {
    const { data } = await axios.patch(`${Path.UPDATE_USER_DATA}/`+id,payLoad);
    return data;
  };
  const deleteUserData = async (id) => {
    const { data } = await axios.delete(`${Path.DELETE_USER_DATA}/`+id);
    return data;
  };

  const getHobbyData = async () => {
    const { data } = await axios.get(`${Path.GET_HOBBY_DATA }`);
    return data;
  };
  const addHobbyData = async (payLoad) => {
    const { data } = await axios.post(`${Path.ADD_HOBBY_DATA}`,payLoad);
    return data;
  };
  const updateHobbyData = async (id,payLoad) => {
    const { data } = await axios.patch(`${Path.UPDATE_HOBBY_DATA}/`+id,payLoad);
    return data;
  };
  const deleteHobbyData = async (id) => {
    const { data } = await axios.delete(`${Path.DELETE_HOBBY_DATA}/`+id);
    return data;
  };


  export default{

    getUserData,
    addUserData,
    updateUserData,
    deleteUserData,

    getHobbyData,
    addHobbyData,
    updateHobbyData,
    deleteHobbyData,

  }