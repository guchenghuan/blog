import React from "react";
import Fade from "react-reveal/Fade";
import Section from "../../components/Section";
import Title from "../../components/Title";
import styles from "./styles.module.scss";
import { detectMobile } from "../../utils";
import Back from "../../components/BackHome";
import {
  always,
  react,
  vue,
  javaScript,
  css,
  littleScript,
  node,
  visible,
  bgd,
  build,
  icon,
  study,
  community,
} from "./constants";

const isMobile = detectMobile();

const Contact = () => (
  <Section
    id="contact"
    className={styles.contact}
    style={{ backgroundAttachment: isMobile ? "initial" : "fixed" }}
  >
    <Back />
    <Title tag="h4" style={{ textAlign: "left" }}>
      常用工具
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {always.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      React 生态
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {react.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      Vue 生态
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {vue.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      JavaScript 框架类库
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {javaScript.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      CSS 相关
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {css.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      小程序相关
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {littleScript.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      Node 相关
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {node.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      绘图
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {visible.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      编译&amp;构建&amp;打包
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {bgd.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      站点生成器
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {build.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      图标库
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {icon.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      学习资料
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {study.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      社区
    </Title>
    <Fade bottom>
      <div className={styles.navLinks}>
        {community.map((item) => {
          return (
            <a
              className={styles.navLink}
              key={item.title}
              href={item.webSite}
              target="_blank"
              rel="noreferrer"
            >
              <article className={styles.box}>
                <div className={styles.boxHeader}>
                  <div className={styles.icon}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5 id={item.title} className={styles.title}>
                    {item.title}
                  </h5>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </article>
            </a>
          );
        })}
      </div>
    </Fade>
  </Section>
);

export default Contact;
