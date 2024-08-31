import './selling.css'
import selling1 from '/selling1.jpg'
import selling2 from '/selling2.jpg'
import selling3 from '/selling3.jpg'
import { IoMdStar } from "react-icons/io";

const selling = () => {
  return (
    <div className='box'>
       <h2>Best Selling</h2>
       <p>Get in on the trend with our curated selection of best-selling styles.</p>

       <div className='selling-card'>
             <div className='selling'>
                  <img src={selling1} alt="" />
                  <p><span>Regular Fit Long Sleeve Top</span><br/>$38.99&nbsp;&nbsp;&nbsp;4.5 <IoMdStar style={{ color: '#DAA520' }} /></p>
             </div>
             <div className='selling'>
                  <img src={selling2} alt="" />
                  <p><span>Black Crop Tailored Jacket</span><br/>$62.99&nbsp;&nbsp;&nbsp;4.1 <IoMdStar style={{ color: '#DAA520' }} /></p>
             </div>
             <div className='selling'>
                <img src={selling3} alt="" />
                <p><span>Textured Sunset Shirt</span><br/>$49.99&nbsp;&nbsp;&nbsp;4.3 <IoMdStar style={{ color: '#DAA520' }} /></p>
             </div>
       </div>
       <button>See all &rarr;</button>
    </div>

  )
}

export default selling