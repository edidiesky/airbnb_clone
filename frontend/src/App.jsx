import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Layout,
  Home,
  Single,
  // Login,
  // Register,
  ProtectRoute,
  Wish,
  Overview,
  AboutPlace,
  DescriptionOfplace,
  LocationOfplace,
  BasicInfoAboutPlace,
  Exception,
  BasicOfferOfPlace,
  PhotosAboutPlace,
  TitleOfPlace,
  InformationOfplace,
  PriceOfplace,
  ReviewOfplace,
  Payment,
  Reservations,
} from "./screens";

export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rooms/:id" element={<Single />} />
          <Route path="wishlists" element={<Wish />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="/:id/payment" element={<Payment />} />
        </Route>
        <Route path={"/become-a-host"} element={<Layout type={"hosting"} />}>
          <Route path="overview" element={<Overview />} />
          <Route path=":selllerid/about-your-place" element={<AboutPlace />} />
          <Route path=":selllerid/structure" element={<DescriptionOfplace />} />
          <Route path=":id/location" element={<LocationOfplace />} />
          <Route path=":id/floor-plan" element={<BasicInfoAboutPlace />} />
          <Route path=":id/stand-out" element={<Exception />} />
          <Route path=":id/amenities" element={<BasicOfferOfPlace />} />
          <Route path=":id/photos" element={<PhotosAboutPlace />} />
          <Route path=":id/title" element={<TitleOfPlace />} />
          <Route path=":id/description" element={<InformationOfplace />} />
          <Route path=":id/price" element={<PriceOfplace />} />
          <Route path=":id/reviews" element={<ReviewOfplace />} />
        </Route>
      </Routes>
    </div>
  );
}
