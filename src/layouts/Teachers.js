import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// Import necessary components for the Teacher layout

import FixedPlugin from "components/FixedPlugin/FixedPlugin";

import routes from "routes.js";


import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import Footer from "components/Footer/Footer";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Png from "views/Png";
import { Col, Row } from "react-bootstrap";
import StudentDetails from "views/teachers/StudentDetails";
import ProgressCard from "views/teachers/ProgressCard";


var ps;

function Teacher(props) {
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setSidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  // Your scroll initialization and cleanup effects here...

  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setSidebarOpened(!sidebarOpened);
  };

  const getroutes = () => {
    return routes.map((prop, key) => {
      if (prop.layout === "/teacher") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          
            <div data={color}>
              <Row>
                  <AdminNavbar
                    brandText={getBrandText(location.pathname)}
                    toggleSidebar={toggleSidebar}
                    sidebarOpened={sidebarOpened}
                  />
              </Row>
              <Col className="mt-5 col-12">
                  <Routes>
                    {getroutes(routes)}
                    <Route
                      path="/"
                      element={<Navigate to="/teacher/dashboard" replace />}
                    />
                    <Route
                    path="/student-details"
                    element={<StudentDetails></StudentDetails>}
                    ></Route>   
                    <Route
                    path="/progress-card"
                    element={<ProgressCard></ProgressCard>}
                    ></Route> 
                    <Route
                path="*"
                element={<Png></Png>}
              />
                  </Routes>
              </Col>
              {
                location.pathname === "/teacher/maps" ? null : <Footer fluid />
              }
            </div>
         
          <FixedPlugin bgColor={color} handleBgClick={changeColor} />
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Teacher;




