import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "./index.css";

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
  Profile,
  DurationsOfplace,
  UserOrder,
} from "./screens";
import {
  HostEarnings,
  HostGuests,
  HostInbox,
  HostLayout,
  HostListings,
  HostOrders,
  HostProfile,
  HostReviews,
} from "./screens/dashboard";
import HomeLoader from "./components/loaders/homeloader";

const HomeWrapper = lazy(() => import("./screens/Home"));

export default function App() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rooms/:id" element={<Single />} />
          <Route path="/users/show/:id" element={<Profile />} />
          <Route path="wishlists" element={<Wish />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="/:id/payment" element={<Payment />} />
          <Route path="/:id/order" element={<UserOrder />} />
          <Route path="/order" element={<UserOrder />} />
        </Route>
        {/* host listing routes */}
        <Route path={"/become-a-host"} element={<Layout type={"hosting"} />}>
          <Route path="overview" element={<Overview />} />
          <Route path=":selllerid/about-your-place" element={<AboutPlace />} />
          <Route path=":selllerid/structure" element={<DescriptionOfplace />} />
          <Route path=":id/location" element={<LocationOfplace />} />
          <Route path=":id/floor-plan" element={<BasicInfoAboutPlace />} />
          <Route path=":id/stand-out" element={<Exception />} />
          {/* <Route path=":id/amenities" element={<BasicOfferOfPlace />} /> */}
          <Route path=":id/photos" element={<PhotosAboutPlace />} />
          <Route path=":id/title" element={<TitleOfPlace />} />
          <Route path=":id/description" element={<InformationOfplace />} />
          <Route path=":id/duration" element={<DurationsOfplace />} />
          <Route path=":id/price" element={<PriceOfplace />} />
          <Route path=":id/reviews" element={<ReviewOfplace />} />
        </Route>

        {/* host listing routes */}
        <Route path={"/dashboard/hosting/"} element={<HostLayout />}>
          <Route exact index element={<HostEarnings />} />
          <Route exact path="profile" element={<HostProfile />} />
          <Route exact path="inbox" element={<HostInbox />} />
          <Route exact path="orders" element={<HostOrders />} />
          <Route exact path="guests" element={<HostGuests />} />
          <Route exact path="listings" element={<HostListings />} />
          <Route exact path="reviews" element={<HostReviews />} />
          {/* <Route path="listings" element={<host />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
