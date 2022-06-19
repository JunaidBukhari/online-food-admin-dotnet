import React, { useRef, useState } from "react";
const ImageUpload = (props) => {
  const upload = useRef(null);
  const [image, setImage] = useState("");
  const onImageChange = (event) => {
    props.setImage(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImage(base64data);
    };
  };
  return (
    <div className="ml-3 mt-5">
      <div>
        <div>
          {(props.newObj?.image || image) && (
            <>
              <div>
                <img
                  style={{ height: "200px" }}
                  src={image || props.newObj?.image}
                  alt=""
                />
              </div>
              <button
                className="btn btn-danger mt-2"
                style={{ backgroundColor: "#cc3300", marginBottom: "10px" }}
                onClick={(e) => {
                  e.preventDefault();
                  setImage("");
                  props.setImage("");
                  props.setNewObj({ ...props.newObj, image: "" });
                }}
              >
                Delete
              </button>
            </>
          )}
          {!props.newObj.image && (
            <div>
              <input ref={upload} type="file" onChange={onImageChange} hidden />
              <button
                className="btn btn-success mt-3"
                onClick={(e) => {
                  e.preventDefault();
                  upload.current.click();
                }}
              >
                UPLOAD IMAGE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
