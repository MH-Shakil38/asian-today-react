import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Header from './pages/header/header';
import singlePage from './pages/singlePage/singlePage';
import Footer from './pages/footer/Footer';
import Home from './Component/Home/Home';
import SinglePage from './pages/singlePage/singlePage';
import Category from './pages/category/Category';
import "../public/assets/css/plugins/bootstrap.min.css"
import "../public/assets/css/plugins/animate.min.css"
import "../public/assets/css/plugins/fontawesome.css"
import "../public/assets/css/plugins/modal-video.min.css"
import "../public/assets/css/plugins/owl.carousel.css"
import "../public/assets/css/plugins/slick.css"
import "../public/assets/css/plugins/stellarnav.css"
import "../public/assets/css/theme.css"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:newsId/news/:artical/:uuid" element={<SinglePage />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
      <Footer />
    </>
    
  )
}

export default App
