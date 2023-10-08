/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-10-08 18:03:12
 * @FilePath: /me/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { BackTop } from "antd";
import Loading from "./components/Loading";
import { renderRoutes } from "react-router-config";
import routes from "./router/routerConfig";
const Footer = React.lazy(() => import("./sections/Footer"));

const App: FC = () => (
  <div id="app">
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/about" />
          {renderRoutes(routes)}
        </Switch>
      </Router>
      <BackTop>
        <div className="back-to-top">👆</div>
      </BackTop>
      <Footer />
    </Suspense>
  </div>
);

export default App;
