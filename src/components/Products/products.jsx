import './products.css';
import product1 from '/product1.jpg';
import product2 from '/product2.avif';
import product3 from '/product3.jpg';
import product4 from '/product4.webp';
import product5 from '/product5.jpg';
import product6 from '/product6.jpg';
import product7 from '/product7.jpg';
import product8 from '/product8.avif';
import { IoMdStar } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='box'>
      <h2>Our Products</h2>
      <p>We buy many products that will enhance the buyer style</p>
      <Slider {...settings}>
        <div className='card'>
          <img src={product1} alt="Spread Collar Shirt" />
          <p>Spread Collar Shirt<br />$38.9&nbsp;&nbsp;&nbsp;4.0 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
        <div className='card'>
          <img src={product2} alt="Spread Collar Shirt" />
          <p>Spread Collar Shirt<br />$48.9&nbsp;&nbsp;&nbsp;4.1 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
        <div className='card'>
          <img src={product3} alt="Spread Collar Shirt" />
          <p>Spread Collar Shirt<br />$58.9&nbsp;&nbsp;&nbsp;4.3 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
        <div className='card'>
          <img src={product4} alt="Spread Collar Shirt" />
          <p>Spread Collar Shirt<br />$68.9&nbsp;&nbsp;&nbsp;4.2 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
        <div className='card'>
          <img src={product5} alt="Printed Loose T-shirt" />
          <p>Printed Loose T-shirt<br />$18.9&nbsp;&nbsp;&nbsp;4.1 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
        <div className='card'>
          <img src={product6} alt="Summer Wind Crop Shirt" />
          <p>Summer Wind Crop Shirt<br />$28.9&nbsp;&nbsp;&nbsp;4.2 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
        <div className='card'>
          <img src={product7} alt="Tailored Jacket" />
          <p>Tailored Jacket<br />$38.9&nbsp;&nbsp;&nbsp;4.3 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
        <div className='card'>
          <img src={product8} alt="Solid Round Neck T-shirt" />
          <p>Solid Round Neck T-shirt<br />$48.9&nbsp;&nbsp;&nbsp;4.4 <IoMdStar style={{ color: '#DAA520' }} /></p>
        </div>
      </Slider>
    </div>
  );
}

export default Products;
