import {useState} from "react";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import MenuSection from "./Pages/Home/MenuSection";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  return (
    <>
      <div>
        <Header />
        <BannerSection />
        <MenuSection />
        <Info />
        <Footer />
      </div>
    </>
  );
}

export default App;
