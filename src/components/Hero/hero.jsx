import './hero.css';
import header from '/header-img.avif'
const hero = () => {
  return (
    <div className='header'>
        <div className='left-header'>
            <h2><span>Discover</span> and<br />
             Find Your Own
              Fashion!</h2>

            <p>
            Explore our curated collection of stylish<br />
             clothing and accessories tailored to your<br />
              unique taste.
            </p>
            <button>EXPLORE NOW</button>
        </div>
        <div className='right-header'>
            <img src={header} alt="" />
        </div>
    </div>
  )
}

export default hero