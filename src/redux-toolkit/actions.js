import axios from 'axios';
import { setMenu, setUsers } from './dataSlice';
import { serverRoutes } from './../constants/serverRoutes';
import { uploadImagetoCloudinary } from './../utils/imageUpload';
import { toast } from 'react-hot-toast';
export const getMenu = () => (dispatch) => {
  axios.get(serverRoutes.GET_MENU).then((res) => dispatch(setMenu(res.data)));
};

export const AddandUpdate = (body, setShow) => (dispatch) => {
  axios
    .post(serverRoutes.GET_MENU, body)
    .then((res) => {
      setShow(false);
      dispatch(getMenu());
      toast.success('Success');
    })
    .catch((err) => {
      toast.error('Error while saving');
    });
};

export const AddandUpdateWithImage = (body, image, setShow) => (dispatch) => {
  uploadImagetoCloudinary(image).then((result) => {
    const newBody = { ...body, image: result.data.secure_url };
    dispatch(AddandUpdate(newBody, setShow));
  });
};

export const DeleteFood = (id) => (dispatch) => {
  axios.delete(`${serverRoutes.GET_MENU}/${id}`).then((res) => {
    dispatch(getMenu());
    toast.success('deleted successfully');
  });
};

export const getUsers = () => (dispatch) => {
  axios.get(serverRoutes.GET_USERS).then((res) => dispatch(setUsers(res.data)));
};
