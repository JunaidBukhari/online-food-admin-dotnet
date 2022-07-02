import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux-toolkit/actions";
const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const users = useSelector((state) => state.data.users);
  console.log(users);
  return (
    <div className="container">
      <div className="mt-5">
        <table className="table bg-light">
          <thead style={{ color: "white", backgroundColor: "#343A40" }}>
            <tr>
              <td>User ID</td>
              <td>Name</td>
              <td>Address</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Orders</td>
            </tr>
          </thead>
          <tbody>
            {users.map((c) => (
              <tr>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>
                  <span className="ml-3" style={{ color: "green" }}>
                    {c.address}
                  </span>
                </td>

                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
