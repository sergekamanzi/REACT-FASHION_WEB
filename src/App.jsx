import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Selling from './components/Selling/selling';
import Products from './components/Products/products';
import Mini from './components/Mini/mini';
import Design from './components/Design/design';
import Footer from './components/Footer/footer';
import Login from './components/Pages/login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className='section1'>
                <Hero />
              </div>
              <div className='section2'>
                <Selling />
                <Products />
                <Mini />
                <Design />
              </div>
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
