import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div
        className='d-flex justify-content-center'
        style={{ backgroundColor: 'black' }}
      >
        <span className='text-light'> © </span>
        <a className='text-light' href='#'>
          MY ONLINE FOOD
        </a>
      </div>
    </footer>
  );
};

export default Footer;
