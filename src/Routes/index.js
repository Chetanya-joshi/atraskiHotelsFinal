import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/LandingPAge";
import Aboutindex from "../components/About";
import Contactindex from "../components/ContactUs";
import Booking from "../h/Booking";
import Room1 from "../h/room1";
import BookingRoom from "../h/BookingRoom";
// import BookRoute from "../h/BookRoute";


const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Aboutindex />} />
        <Route path="/contactus" element={<Contactindex />} />
        {/* <Route exact path="/reservation/*" element={<BookRoute />} /> */}
        <Route exact path="/reservation" element={<Booking />} />
        <Route path="/room1/:id" element={<Room1 />} />
        <Route path="/BookingRoom/:id" element={<BookingRoom />} />
      </Routes>
    </>
  );
};
 
export default AppRoute;
