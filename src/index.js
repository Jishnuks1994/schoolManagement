/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";



import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import AdminLayout from "layouts/Admin/Admin.js";
import AdminLogin from "views/AdminLogin";
import Png from "views/Png";
import Teacher from "layouts/Teachers";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    {/* <BackgroundColorWrapper> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/black-dashboard-react" element={<Navigate to="/" replace />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/teacher/*" element={<Teacher />} />
          <Route
            path="*"
            element={<Png></Png>}
          />
        </Routes>
      </BrowserRouter>
    {/* </BackgroundColorWrapper> */}
  </ThemeContextWrapper>
);
