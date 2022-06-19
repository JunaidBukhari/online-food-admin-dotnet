import React, { useEffect, useState } from "react";
import AddEditFoodModal from "./addEditFood";
import { useSelector, useDispatch } from "react-redux";
import RatingStars from "../components/ratings";
import { DeleteFood, getMenu } from "../redux-toolkit/actions";
const Menu = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.menu);
 const handleDelete=(d)=>{
  if (window.confirm("Are You Sure you want to Delete !")) {
    dispatch(DeleteFood(d.id));
  }
 }
  useEffect(() => {
    dispatch(getMenu());
  }, []);
 
  const [obj, setObj] = useState({});
  const [show, setShow] = useState(false);
  return (
    <div className="container ">
      <div
        style={{ marginBottom: "100px" }}
        className="row d-flex justify-content-center"
      >
        <AddEditFoodModal
          setObj={setObj}
          obj={obj}
          show={show}
          setShow={setShow}
        />
        {data?.map((d) => (
          <div key={d.id} className="col-12 mt-4">
            <div
              style={{
                maxHeight: "80px",
                minHeight: "80px",
                backgroundColor: "white",
              }}
              className="card-body"
            >
              <span
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <h5 className="col-4 text-dark">{d.name}</h5>
                <img
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                  height={50}
                  width={50}
                  src={d.image}
                  alt=""
                />
                <h5 className="col-2 mt-2" style={{ color: "green" }}>
                  Rs.{d.price}
                </h5>
                <div>
                  <p className="u-numberrowwwww">{d.comment}</p>
                </div>
              </span>
              <span
                style={{ position: "absolute", bottom: "10px", left: "40px" }}
              >
                {<RatingStars rating={d.rating} />}
              </span>
              <button
                style={{ position: "absolute", bottom: "20px", right: "45px" }}
                className="btn btn-success"
                onClick={() => {
                  setObj(d);
                  setShow(true);
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                style={{ position: "absolute", bottom: "20px", right: "95px" }}
                className="btn btn-danger"
                onClick={() => {
                  handleDelete(d);
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setObj({});
            setShow(true);
          }}
          className="btn btn-success mt-5"
          style={{ width: "150px" }}
        >
          + Add Food
        </button>
      </div>
    </div>
  );
};

export default Menu;
