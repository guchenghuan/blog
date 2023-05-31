/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-05-26 17:07:44
 * @FilePath: /me/src/sections/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC } from "react";
import styles from "./styles.module.scss";
const Left: FC = () => {
  return (
    <div className={styles.leftCard}>
      <a href="/home">IMT的首页</a>
      <a href="/about">关于IMT</a>
      <a href="/say">一些想法</a>
    </div>
  );
};

export default Left;
