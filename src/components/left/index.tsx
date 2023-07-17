/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-06-19 15:45:08
 * @FilePath: /me/src/sections/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC } from "react";
import styles from "./styles.module.scss";
import { useLocation } from "react-router";

const Left: FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={styles.leftCard}>
      <a href="/home" style={{ color: path === "/home" ? "#1677ff" : "" }}>
        IMT的首页
      </a>
      <a href="/about" style={{ color: path === "/about" ? "#1677ff" : "" }}>
        关于IMT
      </a>
      <a href="/say" style={{ color: path === "/say" ? "#1677ff" : "" }}>
        一些小想法
      </a>
      <a href="/nav" style={{ color: path === "/nav" ? "#1677ff" : "" }}>
        前端工具
      </a>
      <a href="/photo" style={{ color: path === "/photo" ? "#1677ff" : "" }}>
        生活的影集
      </a>
    </div>
  );
};

export default Left;
