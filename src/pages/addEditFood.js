import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import ImageUpload from '../components/imageUpload';
import { isEmptyObj } from '../utils/emptyObj';
import { AddandUpdate, AddandUpdateWithImage } from './../redux-toolkit/actions';
import { useDispatch } from 'react-redux';
const AddEditFoodModal = (props) => {
 const dispatch=useDispatch();
  const { obj, setObj, setShow, show } = props;
  const [newObj, setNewObj] = useState({
    id: 0,
    name: '',
    image: '',
    price: '',
    available: false,
  });
  useEffect(() => {
    let newobj = {
      id: obj.id ?? 0,
      name: obj.name,
      image: obj.image,
      price: obj.price,
      available: obj.available,
    };
    setNewObj(newobj);
    setImage("")
  }, [props.obj]);

  const onChange = (e) => {
    setNewObj({ ...newObj, [e.target.name]: e.target.value });
  };
const [image,setImage]=useState('')
  const submit = (e) => {
    e.preventDefault();
    if(image){
     dispatch(AddandUpdateWithImage(newObj,image,setShow))
    }
else{
  
  
  dispatch(AddandUpdate(newObj, setShow))

}

  };
  return (
    <Modal show={show}>
      <div class="form-body container p-5">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3 className="ml-3 mb-4">
                  {!isEmptyObj(obj) ? 'Update Food' : 'Add Food'}
                </h3>
                <form onSubmit={submit} class="requires-validation" novalidate>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      value={newObj.name}
                      onChange={onChange}
                    />
                  </div>

                  <div class="col-md-12 mt-3">
                    <input
                      class="form-control"
                      type="text"
                      name="price"
                      placeholder="Price"
                      required
                      value={newObj.price}
                      onChange={onChange}
                    />
                  </div>
                  <div class="col-md-12 mt-3">
                    <span className="pr-4">Availability</span>
                    <label class="switch">
                      <input
                        checked={newObj.available}
                        onChange={(e) => {
                          setNewObj({ ...newObj, available: e.target.checked });
                        }}
                        type="checkbox"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <ImageUpload setNewObj={setNewObj} newObj={newObj} image={image} setImage={setImage} />

                  <button
                    id="submit"
                    type="submit"
                    class="btn btn-info ml-3 mt-5"
                  >
                    {!isEmptyObj(obj) ? 'Update' : 'Save'}
                  </button>
                  <span
                    onClick={() => {
                      setShow(false);
                      setObj({});
                    }}
                    class="btn btn-danger ml-3 mt-5"
                  >
                    Close
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddEditFoodModal;
