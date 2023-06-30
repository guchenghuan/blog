/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-06-30 15:18:06
 * @FilePath: /me/src/sections/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC } from "react";
import styles from "./styles.module.scss";
import Right from "../../components/MeRight";
import Middle from "../../components/Midlle";
import Left from "../../components/left";

const Home: FC = () => {
  return (
    <>
      <section id="home" className={styles.home}>
        <div style={{ marginBottom: "50px" }}>
          <Left />
        </div>
        <div className={styles.middleContent}>
          <div className={styles.middle}>
            <Middle />
          </div>
          <div className={styles.right}>
            <Right />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
