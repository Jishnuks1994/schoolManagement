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

import AddNewClasses from "views/AddNewClasses";
import AdminViewAll_progressCard from "views/AdminViewAll_progressCard";
import AllClasses from "views/AllClasses";
import Dashboard from "views/Dashboard.js";
import EditClass from "views/EditClass";
import EditTeacher from "views/EditTeacher";
import Payslip from "views/Payslip";
import ProgressCardForAdmin from "views/ProgressCard";
import Students from "views/Students";
import TeacherAttendance from "views/TeacherAttendance";
import Teachers from "views/Teachers";
import ProgressCard from "views/teachers/ProgressCard";
import ProgressCardAll from "views/teachers/ProgressCardAll";
import StudentDetails from "views/teachers/StudentDetails";
import StudentsAttendance from "views/teachers/StudentsAttendance";
import Teacher_Dashboard from "views/teachers/Teacher_Dashboard";
import ViewTeacherAttendance from "views/ViewTeacherAttendance";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",

    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",

    icon: "tim-icons icon-single-02",
    component: <Students />,
    layout: "/admin",
  },
  {
    path: "/teachers",
    name: "Teachers",

    icon: "tim-icons icon-single-02",
    component: <Teachers />,
    layout: "/admin",
  },
  {
    path: "/all-classes",
    name: "All Classes",

    icon: "tim-icons icon-single-02",
    component: <AllClasses />,
    layout: "/admin",
  },
  {
    path: "/all-classes/add-new-class",
    name: "Add Class",
    icon: "tim-icons icon-single-02",
    component: <AddNewClasses />,
    layout: "/admin",
  },
  {
    path: "/all-classes/edit-class/:id",
    name: "Add Class",
    icon: "tim-icons icon-single-02",
    component: <EditClass />,
    layout: "/admin",
  },
  {
    path: "/progress-card",
    name: "Progress Card",

    icon: "tim-icons icon-single-02",
    component: <ProgressCardForAdmin />,
    layout: "/admin",
  },
  {
    path: "/teachers/payslip/:id",
    name: "Pay Slip",

    icon: "tim-icons icon-single-02",
    component: <Payslip />,
    layout: "/admin",
  },
  {
    path: "/teachers/edit/:id",
    name: "Pay Slip",

    icon: "tim-icons icon-single-02",
    component: <EditTeacher />,
    layout: "/admin",
  },
  {
    path: "/teachers/attendance",
    name: "Teacher Attendance",

    icon: "tim-icons icon-single-02",
    component: <TeacherAttendance />,
    layout: "/admin",
  },
  {
    path: "/teachers/view-attendance",
    name: "Teacher Attendance",

    icon: "tim-icons icon-single-02",
    component: <ViewTeacherAttendance />,
    layout: "/admin",
  },
  {
    path: "/students/progress-card-all",
    name: "Teacher Attendance",

    icon: "tim-icons icon-single-02",
    component: <AdminViewAll_progressCard />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Teachers",

    icon: "tim-icons icon-single-02",
    component: <Teacher_Dashboard />,
    layout: "/teacher",
  },
  {
    path: "/student-details",
    name: "Student Details",

    component: <StudentDetails />,
    layout: "/teacher",
  },
  {
    path: "/progress-card",
    name: "Progress Card",

    component: <ProgressCard />,
    layout: "/teacher",
  },
  {
    path: "/students-attendance",
    name: "Attendance",

    component: <StudentsAttendance />,
    layout: "/teacher",
  },
  {
    path: "/progress-card-all",
    name: "Progress Card",
    component: <ProgressCardAll />,
    layout: "/teacher",
  },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: <Map />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // }
];
export default routes;
