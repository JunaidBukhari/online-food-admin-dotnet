import React from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import RatingStars from '../components/ratings';
import { addToCart } from '../redux-toolkit/dataSlice';
const Menu = () => {
  const data = useSelector((state) => state.data.menu);

  const cart = useSelector((state) => state.data.cart);
  const dispatch = useDispatch();
  const additemtoCart = (d) => {
    if (cart.filter((c) => c.id === d.id).length) {
      let newCart = [...cart];
      let obj = newCart.filter((c) => c.id === d.id)?.[0];
      let number = obj.item;
      let newObj = { ...obj, item: ++number };
      let index = newCart.indexOf(obj);
      newCart[index] = newObj;
      toast.success(`you have now ${newObj.item} ${d.title}`);
      dispatch(addToCart(newCart));
    } else {
      const data = [...cart, { ...d, item: 1 }];
      dispatch(addToCart(data));
      toast.success(`${d.title} is Added to cart`);
    }
  };
  return (
    <div className='container '>
      <div
        style={{ marginBottom: '100px' }}
        className='row d-flex justify-content-center'
      >
        {data?.map((d) => (
          <div key={d.id} className='col-12 mt-4'>
            <div
              style={{
                maxHeight: '80px',
                minHeight: '80px',
                backgroundColor: 'white',
              }}
              className='card-body'
            >
              <span
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <h5 className='col-4 text-dark'>{d.title}</h5>
                <img
                  style={{
                    cursor: 'pointer',
                    objectFit: 'cover',
                  }}
                  height={50}
                  width={50}
                  src={d.image}
                  alt='Card image cap col-1'
                />
                <h5 className='col-2 mt-2' style={{ color: 'green' }}>
                  Rs.{d.price}
                </h5>
                <div>
                  <p className='u-numberrowwwww'>{d.comment}</p>
                </div>
              </span>
              <span
                style={{ position: 'absolute', bottom: '10px', left: '40px' }}
              >
                {<RatingStars rating={4.5} />}
              </span>
              <button
                style={{ position: 'absolute', bottom: '20px', right: '45px' }}
                className='btn btn-success'
                onClick={() => additemtoCart(d)}
              >
                <i className='fa-solid fa-pen'></i>
              </button>
              <button
                style={{ position: 'absolute', bottom: '20px', right: '95px' }}
                className='btn btn-danger'
                onClick={() => additemtoCart(d)}
              >
                <i className='fa-solid fa-trash'></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
