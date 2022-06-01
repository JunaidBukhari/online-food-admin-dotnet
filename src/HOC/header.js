import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.data.cart);
  let itemsInCart = cart.reduce((value, obj) => (value = value + obj.item), 0);
  const logout = () => {
    localStorage.clear();
    toast.success('Logout Success');
    navigate('/login');
  };
  return (
    <div id='home' className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          MY ONLINE FOOD
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/services' className='navbar-brand active'>
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/menu' className='navbar-brand active'>
                Menu
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/cart' className=' btn btn-danger '>
                ORDER NOW
              </Link>
            </li>
          </ul>

          {localStorage.getItem('isAuthenticated') && (
            <button onClick={logout} className='btn btn-warning mr-5'>
              Logout
            </button>
          )}

          <Link
            to='/contact'
            href='http://localhost/project/addorder.php'
            className='pr-0'
          >
            <i
              class='fa-solid fa-message text-dark'
              style={{ fontSize: '24px' }}
            ></i>
          </Link>
          <span className='pl-1 mr-4 badge badge-danger'>{itemsInCart}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
