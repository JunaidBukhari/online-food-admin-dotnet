import axios from 'axios';
import { setMenu } from './dataSlice';
import { serverUrl } from './../constants/serverRoutes';
import { uploadImagetoCloudinary } from './../utils/imageUpload';
export const getMenu = () => (dispatch) => {
  axios
    .get(serverUrl)
    .then((res) => dispatch(setMenu(res.data)));
};

export const AddandUpdate=(body,setShow)=>(dispatch)=>{
  axios.post(serverUrl,body).then(res=>{setShow(false); dispatch(getMenu())})
}

export const AddandUpdateWithImage=(body,image,setShow)=>(dispatch)=>{
  uploadImagetoCloudinary(image).then(result=>{
    const newBody={...body, image:result.data.secure_url}
    dispatch(AddandUpdate(newBody,setShow))
  });
 
}