import React from 'react';

import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Sidemenu from "./Components/Sidemenu";
import Newscatbox from "./Components/Newscatbox";
import Category from "./Components/Category";
import Search from "./Components/Search";
import Detail from "./Components/Detail";
import Aboutus from "./Components/Aboutus";
import Privacypolicy from "./Components/Privacypolicy";
import Advertisement from "./Components/Advertisement";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
        <Loader/>
        <Header/>
        <Sidemenu/>
          <Routes>
            <Route exact path="/" element={<Newscatbox />} />
            <Route exact path="/category" element={<Category />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/detail" element={<Detail />} />
            <Route exact path="/about-us" element={<Aboutus />} />
            <Route exact path="/privacy-policy" element={<Privacypolicy />} />
            <Route exact path="/advertisement" element={<Advertisement />} />
            <Route exact path="/contact-us" element={<Contactus />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;