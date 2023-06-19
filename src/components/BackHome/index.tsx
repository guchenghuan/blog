/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-06-19 10:50:29
 * @FilePath: /me/src/sections/About/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import styles from "./styles.module.scss";
import homepage from "../../assets/screenshots/homepage.png";
import { Tooltip } from "antd";

const About = () => (
  <a href="/">
    <Tooltip placement="top" title={"回首页点这里哦"}>
      <img src={homepage} alt="github" className={styles.backHome} />
    </Tooltip>
  </a>
);

export default About;
