/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-10-08 18:01:47
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
import me from "../../assets/screenshots/me.jpg";
import weibo from "../../assets/screenshots/weibo.png";
import juejin from "../../assets/screenshots/juejin.png";
import github from "../../assets/screenshots/github.png";
import wechat from "../../assets/screenshots/wechat.png";
import contact from "../../assets/screenshots/contact.jpg";
import RubberBand from "react-reveal/RubberBand";
import { Tooltip } from "antd";

const About = () => (
  <Section id="about" className={styles.about}>
    <div style={{ marginBottom: "50px" }}>
      <Left />
    </div>
    <Title tag="h2">关于</Title>

    <Title tag="h3">
      哈喽，我是顾成焕(也可以叫我IMT) 👻
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
    <div className={styles.findMe}>
      <Title tag="h3">找到我 🔍</Title>
      <Fade bottom>
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                width: "20%",
                justifyContent: "space-around",
              }}
            >
              <a href="https://juejin.cn/user/2647279731480477">
                <img src={juejin} alt="juejin" className={styles.contactImg} />
              </a>
              <a href="https://weibo.com/u/5874458139">
                <img src={weibo} alt="weibo" className={styles.contactImg} />
              </a>
              <a href="https://github.com/guchenghuan">
                <img src={github} alt="github" className={styles.contactImg} />
              </a>
              <span>
                <Tooltip
                  placement="top"
                  color={"rgba(255, 255, 255, 0)"}
                  title={
                    <img
                      src={contact}
                      alt="contact"
                      style={{ width: "200px", height: "200px" }}
                    />
                  }
                >
                  <img
                    src={wechat}
                    alt="wechat"
                    className={styles.contactImg}
                  />
                </Tooltip>
              </span>
            </span>
          </div>

          <RubberBand top>
            <p className={styles.subTitle}>
              👍 求点赞，求关注，求转发，一键三连！
            </p>
          </RubberBand>
        </div>
      </Fade>
    </div>
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
