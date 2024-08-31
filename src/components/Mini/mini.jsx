import './mini.css';
import miniback from '/mini-back.png';

const mini = () => {
  return (
    <div className='mini-section'>
        <img src={miniback} alt="" />
        <div className='mini-right'>
            <h3>Exclusive offer</h3>
            <p>Unlock the ultimate style upgrade with our exclusive<br/>
             offer Enjoy savings of up to 40% off on our latest New<br/>
              Arrivals</p>
            <button>BUY NOW</button>
        </div>
    </div>
  )
}

export default mini