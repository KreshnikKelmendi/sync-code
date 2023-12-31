import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import WebServices from './Components/Services/WebServices';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkPage from './Pages/WorkPage';
import AboutUsPage from './Pages/AboutUsPage';
import SinglePageOfWork from './Pages/SinglePageOfWork';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/web-development" element={<WebServices />} />
            <Route path="/works" element={<WorkPage />} />
            <Route path="/works/:workID" element={<SinglePageOfWork />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;
