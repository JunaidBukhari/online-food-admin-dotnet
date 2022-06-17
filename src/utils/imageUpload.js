import axios from 'axios';

export const uploadImagetoCloudinary = async (image) => {
  const url = 'https://api.cloudinary.com/v1_1/junaidbukhari/image/upload';
  const result = await axios.post(url, image);
  console.log(result);
};
