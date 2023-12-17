import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import WebServices from './Components/Services/WebServices';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-development" element={<WebServices />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
