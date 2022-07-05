import "../css/App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./header/Header";
import { Singup } from "./login-signUp/Singup";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";
import { AnimalImages } from "./images/AnimalImages";
import { PepleSearch } from "./images/PepleSearch";
import { components } from "./topScrool/categories";
import Face from "./images/Face";
import Nature from "./images/Nature";
import Man from "./images/Man";
import Busines from "./images/Busines";
import Date from "./images/Date";
import Lesbian from "./images/Lesbian";
import Gay from "./images/Gay";
import Girls from "./images/Girls";
import Food from "./images/Food";
import Dogs from "./images/Dogs";
import Love from "./images/Love";
import Cooking from "./images/Cooking";
import Water from "./images/Water";
import NotFound from "./notFound/NotFound";
import ForgetPassword from "../components/login-signUp/ForgetPassword"

function App() {
  const [bacroundNav, setBacroundNav] = useState(false);
  const categories = components; // varible categories which have the array of categories
  useEffect(() => {
    // adding the event when scroll change background
    window.addEventListener("scroll", (event) => {
      if (window.scrollY >= 1) {
        setBacroundNav(true);
      } else {
        setBacroundNav(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <div
        className="sticky-top header-inApp"
        style={{
          backgroundColor: bacroundNav ? "white" : "#00000000",
        }}
      >
        <Header data={categories} />
      </div>

      <Routes>
        <Route path="/picture-client" element={<Main />}></Route>
        <Route path="/signup" element={<Singup />}></Route>
        <Route path="/Animals" element={<AnimalImages />}></Route>
        <Route path="/Face" element={<Face />}></Route>
        <Route path="/Nature" element={<Nature />}></Route>
        <Route path="/Man" element={<Man />}></Route>
        <Route path="/Busines" element={<Busines />}></Route>
        <Route path="/Date" element={<Date />}></Route>
        <Route path="/Lesbian" element={<Lesbian />}></Route>
        <Route path="/Gay" element={<Gay />}></Route>
        <Route path="/Girls" element={<Girls />}></Route>
        <Route path="/Food" element={<Food />}></Route>
        <Route path="/Dogs" element={<Dogs />}></Route>
        <Route path="/Love" element={<Love />}></Route>
        <Route path="/Cooking" element={<Cooking />}></Route>
        <Route path="Water" element={<Water />}></Route>
        <Route path="/people/search" element={<PepleSearch />}></Route>
        <Route path="/forgot-password" element={<ForgetPassword/>}></Route>

        <Route path="/picture-client*" element={<NotFound />}>
          {/* if page was not found */}
        </Route>
      </Routes>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;
