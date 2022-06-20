import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux-toolkit/dataSlice';
const Orders = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.data.cart);
  console.log(cart);
  const increment = (d) => {
    let newCart = [...cart];
    let obj = newCart.filter((c) => c.id === d.id)?.[0];
    let number = obj.item;
    let newObj = { ...obj, item: ++number };
    let index = newCart.indexOf(obj);
    newCart[index] = newObj;
    dispatch(addToCart(newCart));
  };
  const decrement = (d) => {
    let newCart = [...cart];
    let obj = newCart.filter((c) => c.id === d.id)?.[0];
    let index = newCart.indexOf(obj);
    let number = obj.item;
    if (number > 1) {
      let newObj = { ...obj, item: --number };
      newCart[index] = newObj;
      dispatch(addToCart(newCart));
    } else {
      newCart.splice(index, 1);
      dispatch(addToCart(newCart));
    }
  };
  const handleDelete = (d) => {
    if (window.confirm('Are You Sure you want to Delete !')) {
      let newCart = [...cart];
      let obj = newCart.filter((c) => c.id === d.id)?.[0];
      let index = newCart.indexOf(obj);
      newCart.splice(index, 1);
      dispatch(addToCart(newCart));
    }
  };
  return (
    <div className="container">
      <div className="mt-5">
        <table className="table bg-light">
          <thead style={{ color: 'white', backgroundColor: '#343A40' }}>
            <tr>
              <td>Order ID</td>
              <td>Item Name</td>
              <td>Amount</td>
              <td>Price</td>
              <td>Name of Customer</td>
              <td>Address</td>
              <td>Contact Number</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((c) => (
              <tr>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>
                  <span className="ml-3" style={{ color: 'green' }}>
                    {c.item}
                  </span>
                </td>

                <td>Rs {c.item * c.price}</td>
                <td>Junaid</td>
                <td>House # 120, Southern District Bahria Orchard Lahore</td>
                <td>+923014254498</td>
                <td>
                  <i
                    onClick={() => handleDelete(c)}
                    className="fa fa-trash"
                    style={{ color: 'red', cursor: 'pointer' }}
                  ></i>
                  <i
                    onClick={() => {}}
                    className="fa fa-pen ml-4"
                    style={{ color: 'blue', cursor: 'pointer' }}
                  ></i>
                  <i
                    onClick={() => {}}
                    className="fa fa-check ml-4"
                    style={{ color: 'green', cursor: 'pointer' }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button disabled={!cart.length} className='btn btn-success mt-3'>
        {cart.length ? 'APPROVE ORDER' : 'NO ORDERS YET'}
      </button> */}
    </div>
  );
};

export default Orders;
