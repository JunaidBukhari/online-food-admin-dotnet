import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import ImageUpload from '../components/imageUpload';
import { isEmptyObj } from '../utils/emptyObj';

const AddEditFoodModal = (props) => {
  const { obj, setObj, setShow, show } = props;
  const [newObj, setNewObj] = useState({
    name: '',
    image: '',
    price: '',
    available: false,
  });
  useEffect(() => {
    let newobj = {
      name: obj.name,
      image: obj.image,
      price: obj.price,
      available: obj.available,
    };
    setNewObj(newobj);
  }, [props.obj]);
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
                <form class="requires-validation" novalidate>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      value={newObj.name}
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
                    />
                  </div>
                  <div class="col-md-12 mt-3">
                    <span className="pr-4">Availability</span>
                    <label class="switch">
                      <input checked={newObj.available} type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <ImageUpload image={newObj.image} />

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
