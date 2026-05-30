import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllServices from "./pages/AllServices";
import WorkersPage from "./pages/WorkersPage";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";

  function App() {

  return (

    <BrowserRouter>

      <div className="pt-24">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/services"
            element={<AllServices />}
          />

          <Route
            path="/workers"
            element={<WorkersPage />}
          />

          <Route
            path="/booking"
            element={<Booking />}
          />

          <Route
            path="/booking-success"
            element={<BookingSuccess />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;