import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../redux-toolkit/actions";
import { getUsers } from "./../redux-toolkit/actions";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.data.orders);
  useEffect(() => {
    dispatch(getOrders());
    dispatch(getUsers());
  }, []);
  return (
    <div className="container">
      <div className="mt-5">
        <table className="table bg-light">
          <thead style={{ color: "white", backgroundColor: "#343A40" }}>
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
            {orders.map((c) => (
              <tr>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>
                  <span className="ml-3" style={{ color: "green" }}>
                    {c.item}
                  </span>
                </td>

                <td>Rs {c.item * c.price}</td>
                <td>Junaid</td>
                <td>House # 120, Southern District Bahria Orchard Lahore</td>
                <td>+923014254498</td>
                <td>
                  <i
                    className="fa fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                  <i
                    onClick={() => {}}
                    className="fa fa-pen ml-4"
                    style={{ color: "blue", cursor: "pointer" }}
                  ></i>
                  <i
                    onClick={() => {}}
                    className="fa fa-check ml-4"
                    style={{ color: "green", cursor: "pointer" }}
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
