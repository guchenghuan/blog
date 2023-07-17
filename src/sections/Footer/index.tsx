/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-07-03 19:08:46
 * @FilePath: /me/src/sections/Footer/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Tooltip } from "antd";
import Paragraph from "../../components/Paragraph";
import styles from "./styles.module.scss";

// 图标
import react from "../../assets/icons/react.png";
import antd from "../../assets/icons/antd.png";
import eslint from "../../assets/icons/eslint.png";
import ts from "../../assets/icons/ts.png";
import sass from "../../assets/icons/sass.png";

const techs = [
  {
    content: "React.js",
    image: react,
  },
  {
    content: "TypeScript",
    image: ts,
  },
  {
    content: "Eslint",
    image: eslint,
  },
  {
    content: "Antd",
    image: antd,
  },
  {
    content: "Sass",
    image: sass,
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <Paragraph>技术栈</Paragraph>
    <div className={styles.techList}>
      {techs.map((tech) => (
        <Tooltip
          key={tech.content}
          placement="top"
          title={tech.content}
          color="black"
        >
          <img src={tech.image} alt="tech" />
        </Tooltip>
      ))}
    </div>
    <p className={styles.record}>
      <a rel="noreferrer" target="_blank" href="https://beian.miit.gov.cn/">
        苏ICP备2023021062号
      </a>
    </p>
  </footer>
);

export default Footer;
