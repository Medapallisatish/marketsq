import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import BookingForm from "./Booking"; // Import the booking form component
import HomeWrapper from "./Homewrapper";

const App = () => (
  <>
      

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<HomeWrapper/>}/>
      <Route path="/booking" element={<BookingForm/>} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
