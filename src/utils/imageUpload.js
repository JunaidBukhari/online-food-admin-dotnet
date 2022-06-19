import axios from 'axios';

export const uploadImagetoCloudinary = async (image) => {
const formData=new FormData();
formData.append("file", image);
formData.append("upload_preset", "unpzix86");
  const url = 'https://api.cloudinary.com/v1_1/junaidbukhari/image/upload';
  const result = axios.post(url, formData);
  return(result);
};
