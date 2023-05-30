/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-05-26 11:07:40
 * @FilePath: /me/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, Suspense } from "react";
import Loading from "./components/Loading";
import { Routes, Route, Navigate } from "react-router-dom";
import { BackTop } from "antd";

const About = React.lazy(() => import("./sections/About"));
const Footer = React.lazy(() => import("./sections/Footer"));
const IMT = React.lazy(() => import("./sections/IMT"));
const Say = React.lazy(() => import("./sections/Say"));

const App: FC = () => (
  <div id="app">
    <Suspense fallback={<Loading />}>
      {/* <Nav /> */}

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<IMT />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/say" element={<Say />}></Route>
        </Routes>

        {/* <IMT />
        <Home />
        <About />
        <Project />
        <Contact /> */}
        <BackTop>
          <div className="back-to-top">👆</div>
        </BackTop>
      </main>

      <Footer />
    </Suspense>
  </div>
);

export default App;
