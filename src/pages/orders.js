import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  getOrders,
  getMenu,
  updateOrder,
} from "../redux-toolkit/actions";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.data.orders);
  const users = useSelector((state) => state.data.users);
  const menu = useSelector((state) => state.data.menu);
  useEffect(() => {
    dispatch(getOrders());
    dispatch(getUsers());
    dispatch(getMenu());
  }, []);

  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(
      orders.map((o) => {
        return {
          OrderID: o.id,
          amount: o.amount,
          status: o.status,
          paymentMethod: o.paymentMethod,
          Food: requiredfood(o.foodId),
          User: requireduser(o.userId),
        };
      })
    );
  }, [orders, users, menu]);

  console.log(array);
  const requiredfood = (id) => {
    return menu.filter((m) => m.id === id)[0];
  };
  const requireduser = (id) => {
    return users.filter((u) => u.id === id)[0];
  };
  return (
    <div className="container">
      <div className="mt-5">
        <table className="table bg-light mb-5">
          <thead style={{ color: "white", backgroundColor: "#343A40" }}>
            <tr>
              <td>Order ID</td>
              <td>Item Name</td>
              <td>Amount</td>
              <td>Price</td>
              <td>Name of Customer</td>
              <td>Address</td>
              <td>Contact Number</td>
              <td>Payment Method</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {array.map((c) => (
              <tr
                style={{
                  backgroundColor:
                    c.status === "Pending"
                      ? "#6495ED"
                      : c.status === "Delivered"
                      ? "#76B947"
                      : c.status === "Canceled"
                      ? "#E34234"
                      : "",
                  color:
                    c.status === "Pending"
                      ? "white"
                      : c.status === "Delivered"
                      ? "white"
                      : c.status === "Canceled"
                      ? "white"
                      : "",
                }}
              >
                <td>{c.OrderID}</td>
                <td>{c.Food?.name}</td>
                <td>
                  <span className="ml-3" style={{ color: "green" }}>
                    {c.amount}
                  </span>
                </td>

                <td>Rs {c.amount * c.Food?.price}</td>
                <td>{c.User?.name}</td>
                <td>{c.User?.address}</td>
                <td>{c.User?.phone}</td>
                <td>{c.paymentMethod}</td>
                <td>{c.status}</td>
                <td>
                  <div className="d-flex">
                    {c.status === "pending" && (
                      <i
                        onClick={() => {
                          let order = orders.filter(
                            (o) => o.id === c.OrderID
                          )[0];
                          dispatch(
                            updateOrder({ ...order, status: "Canceled" })
                          );
                        }}
                        className="fa fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                      ></i>
                    )}
                    {c.status === "Pending" && (
                      <i
                        onClick={() => {
                          let order = orders.filter(
                            (o) => o.id === c.OrderID
                          )[0];
                          dispatch(
                            updateOrder({ ...order, status: "Preparing" })
                          );
                        }}
                        className="fa fa-check ml-4"
                        style={{ color: "green", cursor: "pointer" }}
                      ></i>
                    )}
                    {c.status === "Preparing" && (
                      <i
                        onClick={() => {
                          let order = orders.filter(
                            (o) => o.id === c.OrderID
                          )[0];
                          dispatch(
                            updateOrder({ ...order, status: "Delivered" })
                          );
                        }}
                        className="fa-solid fa-truck"
                        style={{ color: "blue", cursor: "pointer" }}
                      ></i>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
