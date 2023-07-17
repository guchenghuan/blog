/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-07-03 20:49:56
 * @FilePath: /me/src/sections/About/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import Profile from "./Profile";
import Life from "./Life";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Section from "../../components/Section";
import HighLight from "../../components/HighLight";
import Left from "../../components/left";
const resumeUrl = "https://guchenghuan.github.io/resume/";

const About = () => (
  <Section id="about" className={styles.about}>
    <div style={{ marginBottom: "50px" }}>
      <Left />
    </div>
    <Title tag="h2">关于</Title>

    <Title tag="h3">
      哈喽，我是IMT(也可以叫我戚容) 👻
      <br />
      聊聊我自己
    </Title>

    <Profile />

    <Life />

    <Fade bottom>
      <Paragraph className={styles.goal}>
        <HighLight>要做对且有意义的事！🌟</HighLight>
        <br />
        人生路很长，要活出自己，还要精彩👉{" "}
        <span className={styles.justForFun}>DO Meaningful Things~</span>
      </Paragraph>
    </Fade>

    <Fade bottom>
      <div>
        <Button
          onClick={() => window.open(resumeUrl, "_blank")}
          className={styles.pulse}
        >
          我的简历
        </Button>
      </div>
    </Fade>
  </Section>
);

export default About;
