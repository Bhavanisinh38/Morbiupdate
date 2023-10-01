import React from 'react';

import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Sidemenu from "./Components/Sidemenu";
import Newscatbox from "./Components/Newscatbox";
import Category from "./Components/Category";
// import Search from "./Components/Search";
import Detail from "./Components/Detail";
import Aboutus from "./Components/Aboutus";
import Privacypolicy from "./Components/Privacypolicy";
// import Advertisement from "./Components/Advertisement";
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
            <Route exact="true" path="/" element={<Newscatbox />} />
            <Route exact="true" path="/category" element={<Category />} />
            <Route exact="true" path="/search" element={<Category pagetitle="Showing 41 news of રાજ્યસભા"/>} />
            {/* <Route exact="true" path="/search" element={<Search />} /> */}
            <Route exact="true" path="/detail" element={<Detail />} />
            <Route exact="true" path="/about-us" element={<Aboutus />} />
            <Route exact="true" path="/privacy-policy" element={<Privacypolicy />} />
            <Route exact="true" path="/contact-us" element={<Contactus />} />
            <Route exact="true" path="/advertisement" element={<Contactus pagetitle="Advertisement Inquiry" />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;