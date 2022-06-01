import React from 'react';
import { Link } from 'react-router-dom';
const Start = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='row justify-content-center'>
          <Link id='centered' to='/menu' className='btn btn-danger '>
            MENU
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
