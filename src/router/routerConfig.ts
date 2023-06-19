/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-31 21:23:13
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-06-19 11:14:35
 * @FilePath: /me/src/router/routerConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
const About = React.lazy(() => import("../sections/About"));
const IMT = React.lazy(() => import("../sections/IMT"));
const Say = React.lazy(() => import("../sections/Say"));
const Nav = React.lazy(() => import("../sections/Nav"));
const Photo = React.lazy(() => import("../sections/Photo"));

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
    path: "/nav",
    component: Nav,
  },
  {
    path: "/photo",
    component: Photo,
  },

  {
    path: "/",
    component: IMT,
  },
];
export default routes;
