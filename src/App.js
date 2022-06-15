import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        {/* Start Render Content */}
          <div className="container">
            <div className="main">
              <Layout />
            </div>
          </div>
        {/* End Render Content */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
