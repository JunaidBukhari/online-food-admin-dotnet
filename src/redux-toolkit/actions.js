import axios from 'axios';
import { setMenu } from './dataSlice';
export const getMenu = () => (dispatch) => {
  axios
    .get('https://localhost:7032/api/Food')
    .then((res) => dispatch(setMenu(res.data)));
};
