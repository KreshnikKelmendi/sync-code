import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import WebServices from './Components/Services/WebServices';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkPage from './Pages/WorkPage';
import AboutUsPage from './Pages/AboutUsPage';
import SinglePageOfWork from './Pages/SinglePageOfWork';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import CompanyNews from './Pages/CompanyNews';
import SinglePageOfNews from './Pages/SinglePageOfNews';
import ScrollToTop from './Pages/ScrollToTop';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/web-development" element={<WebServices />} />
            <Route path="/works" element={<WorkPage />} />
            <Route path="/get-in-touch" element={<ContactPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/works/:workID" element={<SinglePageOfWork />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/articles" element={<CompanyNews />} />
            <Route path="/articles/:articleID" element={<SinglePageOfNews />} />
          </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    
    </>
  );
}

export default App;
