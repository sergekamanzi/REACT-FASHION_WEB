import './footer.css';
import  { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { TfiTwitter } from "react-icons/tfi";

const Footer = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input Value:', inputValue);
    // Add your submit logic here
  };

  return (
    <div className='container'>
      <div className='futa'>
        <h2>Rivo</h2>
        <p>Social Media</p>
        <div className='icons'>
          <FaFacebookSquare />  
          <LuInstagram /> 
          <TfiTwitter />
        </div>
      </div>
      <div className='futa'>
        <h5>SHOP</h5>
        <p>Overview</p>
        <p>Products</p>
        <p>Pricing</p>
        <p>Releases</p>
      </div>
      <div className='futa'>
        <h5>COMPANY</h5>
        <p>About Us</p>
        <p>Contact</p>
        <p>News</p>
        <p>Support</p>
      </div>
      <div className='futa'>
        <h5>STAY UP TO DATE</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          <button type="submit" className='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
