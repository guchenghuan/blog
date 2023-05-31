import React from "react";
const About = React.lazy(() => import("../sections/About"));
const IMT = React.lazy(() => import("../sections/IMT"));
const Say = React.lazy(() => import("../sections/Say"));

const routes = [
  {
    path: "/home",
    component: IMT,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/say",
    component: Say,
  },
  {
    path: "/",
    component: IMT,
  },
];
export default routes;
