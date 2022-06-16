export const getMenu = async () => (dispatch) => {
  axios.get('https://localhost:7032/api/Food').then((res) => console.log(res));
};
