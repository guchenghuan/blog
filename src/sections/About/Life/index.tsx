import React from "react";
import Timeline from "../../../components/Timeline";
import TimelineHeader from "../../../components/Timeline/Header";
import TimelineItem from "../../../components/Timeline/Item";
import HighLight from "../../../components/HighLight";
import useTyped from "../../../hooks/useTyped";

// Icons
import trip from "../../../assets/screenshots/trip.jpg";
import neu from "../../../assets/screenshots/ligong.png";
import bilibili from "../../../assets/screenshots/bilibili.png";
import xhs from "../../../assets/screenshots/xhs.png";

import styles from "./styles.module.scss";

const strings = [
  "码农",
  "社畜",
  "打工人",
  "程序员",
  "工程师",
  "前端开发",
  "测试开发",
];

const Life = () => {
  const el = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1995</TimelineHeader>
      <TimelineItem direction="right" time="6月" header="👶🏻" />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="🙇‍♂️ 好好学习..." />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={["🎓 本科毕业 🎉"]}
        node={
          <span className={styles.customNode}>
            <img width={46} src={neu} alt="uci" />
          </span>
        }
        content={[
          <span>
            <HighLight>湖北理工</HighLight> @ 环境工程
          </span>,
          "最初学的Java，工作慢慢学写 JavaScript~",
        ]}
      />
      <TimelineItem
        time="6月"
        node={
          <span className={styles.customNode}>
            <img width={34} src={trip} alt="neu" />
          </span>
        }
        header={[
          "trip 携程",
          <span>
            初出茅庐 <HighLight>测试开发</HighLight>
          </span>,
        ]}
        content={["JavaScript , React Native , Jest , Selenium"]}
      />
      <TimelineHeader>2020</TimelineHeader>
      <TimelineItem
        node={
          <span className={styles.customNode}>
            <img width={30} src={bilibili} alt="dji" />
          </span>
        }
        direction="right"
        time="4月"
        header={[
          "🚗 bilibili",
          <span>
            崭露头角 <HighLight>测试开发 / 前端开发</HighLight>
          </span>,
        ]}
        content={["TypeScript , React , VUE , Puppeteer , nodejs , MongoDB"]}
      />
      <TimelineHeader>2022</TimelineHeader>
      <TimelineItem
        time="9月"
        node={
          <span className={styles.customNode}>
            <img width={30} src={xhs} alt="tencent" />
          </span>
        }
        header={[
          "red 小红书",
          <span className={styles.position}>
            入职 <HighLight>小红书</HighLight> @{" "}
            <span className={styles.typed} ref={el} />
          </span>,
        ]}
        content={[
          "TypeScript , React , VUE , Puppeteer , nodejs , MongoDB , GoLang",
        ]}
      />
      <TimelineHeader>未来</TimelineHeader>
      <TimelineItem direction="right" header={["未来继续 ing ！"]} />
      <TimelineHeader>Ending...</TimelineHeader>
    </Timeline>
  );
};

export default Life;
