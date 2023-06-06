import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import KamarHotel from "./pages/kamarHotel";
import About from "./pages/About";
import DetailKamar from "./pages/detailKamar";
import DiningRoom from "./pages/diningRoom";
import Contact from "./pages/contact";
import MyNavbar from "./component/myNavbar";
import AddMenuItem from "./admin/tambahMenu";
import TampilFormContact from "./admin/TampilFormContact";
import TambahKamar from "./admin/TambahKamar";

import Booking from "./pages/Booking";
import DetailBookingTicket from "./pages/DetailBookingTiket";
import TicketChecker from "./pages/CekTiket";
import AdminChecker from "./admin/AdminChecker";

function Layout() {
  const location = useLocation();

  // Cek apakah rute saat ini adalah "admin-tambah"
  const isAddMenuItemPage = location.pathname === "/admin-tambah";
  const isEditMenuItemPage = location.pathname === "/tampil-contact";
  const isTambahKamarPage = location.pathname === "/admin-tambah-kamar";
  const isAdminCheckPage = location.pathname === "/admin-checker";

  return (
    <>
      {/* Tampilkan navbar hanya jika bukan halaman "admin-tambah" */}
      {!isAddMenuItemPage &&
        !isEditMenuItemPage &&
        !isTambahKamarPage &&
        !isAdminCheckPage && <MyNavbar />}
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pesan-kamar" element={<KamarHotel />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail-pesan/:id" element={<DetailKamar />} />
          <Route path="/dining-room" element={<DiningRoom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-tambah" element={<AddMenuItem />} />
          <Route path="/tampil-contact" element={<TampilFormContact />} />
          <Route path="/admin-tambah-kamar" element={<TambahKamar />} />
          <Route path="/detail-book" element={<Booking />} />
          <Route
            path="/detail-booking-ticket"
            element={<DetailBookingTicket />}
          />
          <Route path="/cek-ticket" element={<TicketChecker />} />
          <Route path="/admin-checker" element={<AdminChecker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
