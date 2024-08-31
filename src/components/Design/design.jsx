import './design.css';
import last1 from '/last1.avif';
import last2 from '/last2.avif';
import last3 from '/last3.avif';

const design = () => {
  return (
    <div className="cardz">
        <h3>Designer Clothes For You</h3>
        <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
        <div className="imagez">
              <div className="imgz">
                <img src={last1} alt="" />
                <i>Accessories</i>
                <p>Complete your ensemble with<br/>
                 designer accessories such as<br/>
                  handbags, scarves, belts, and hats.</p>
              </div>
              <div className="imgz">
                <img src={last2} alt="" />
                <i>Dresses</i>
                <p>Complete your ensemble with<br/>
                 designer accessories such as<br/>
                  handbags, scarves, belts, and hats.</p>
              </div>
              <div className="imgz">
                <img src={last3} alt="" />
                <i>Outerwear</i>
                <p>Complete your ensemble with<br/>
                 designer accessories such as<br/>
                  handbags, scarves, belts, and hats.</p>
              </div>
        </div>
    </div>
  )
}

export default design