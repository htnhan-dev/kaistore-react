import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import { ToastContainer } from "react-toastify";
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'

import ProductDetailModal from './components/ProductDetailModal';

function App() {
  return (
    <>
      <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Header/>
        {/* Start Render Content */}
          <div className="container">
            <div className="main">
              <Layout />
            </div>
          </div>
        {/* End Render Content */}
        <Footer />
        <ProductDetailModal />
      </BrowserRouter>
    </>
  );
}

export default App;
