import React, { useState } from "react";
import Section from "../../components/Section";
import styles from "./styles.module.scss";
import { Image } from "antd";
import LazyLoad from "react-lazyload";
import { detectMobile } from "../../utils";
import Back from "../../components/BackHome";
import airplane from "../../assets/imt/airplane.jpg";
import anjiluying from "../../assets/imt/anjiluying.jpg";
import chongqing from "../../assets/imt/chongqing.jpg";
import chongqingqiao from "../../assets/imt/chongqingqiao.jpg";
import chuhai from "../../assets/imt/chuhai.jpg";
import dishini from "../../assets/imt/dishini.jpg";
import fangfengzhen from "../../assets/imt/fangfengzhen.jpg";
import gougou from "../../assets/imt/gougou.jpg";
import gouhuo from "../../assets/imt/gouhuo.jpg";
import haotianqi from "../../assets/imt/haotianqi.jpg";
//
import kanhai from "../../assets/imt/kanhai.jpg";
import kuaiting from "../../assets/imt/kuaiting.jpg";
import lianai from "../../assets/imt/lianai.jpg";
import lingkongye from "../../assets/imt/lingkongye.jpg";
import linkong from "../../assets/imt/linkong.jpg";
import luying from "../../assets/imt/luying.jpg";
import mao from "../../assets/imt/mao.jpg";
import mao2 from "../../assets/imt/mao2.jpg";
import meishi from "../../assets/imt/meishi.jpg";
import mingxiaoling from "../../assets/imt/mingxiaoling.jpg";
//
import moganshanhaotianqi from "../../assets/imt/moganshanhaotianqi.jpg";
import moganshanmao from "../../assets/imt/moganshanmao.jpg";
import motianlun from "../../assets/imt/motianlun.jpg";
import ongs from "../../assets/imt/ongs.jpg";
import pujidao from "../../assets/imt/pujidao.jpg";
import pushu from "../../assets/imt/pushu.jpg";
import qiandaohu from "../../assets/imt/qiandaohu.jpg";
import qidong from "../../assets/imt/qidong.jpg";
import shan from "../../assets/imt/shan.jpg";
import luyinggou from "../../assets/imt/luyinggou.jpg";
//
import wanxia from "../../assets/imt/wanxia.jpg";
import water from "../../assets/imt/water.jpg";
import wurencun from "../../assets/imt/wurencun.jpg";
import xiayu from "../../assets/imt/xiayu.jpg";
import xiebei from "../../assets/imt/xiebei.jpg";
import xihuyinghua from "../../assets/imt/xihuyinghua.jpg";
import yeshanghai from "../../assets/imt/yeshanghai.jpg";
import yichangshi from "../../assets/imt/yichangshi.jpg";
import yiqingwaitan from "../../assets/imt/yiqingwaitan.jpg";
//
import yongchi from "../../assets/imt/yongchi.jpg";
import yun from "../../assets/imt/yun.jpg";
import zhoushan from "../../assets/imt/zhoushan.jpg";

const isMobile = detectMobile();
const f = [
  {
    name: "天空之城",
    url: airplane,
    date: "2020 . 10",
  },
  {
    name: "安吉露营",
    url: anjiluying,
    date: "2022 . 12",
  },
  {
    name: "重庆",
    url: chongqing,
    date: "2022 . 10",
  },
  {
    name: "恋爱",
    url: lianai,
    date: "2022 . 11",
  },
  {
    name: "普吉岛出海",
    url: chuhai,
    date: "2018 . 12",
  },
  {
    name: "上海迪士尼",
    url: dishini,
    date: "2022 . 10",
  },
  {
    name: "放风筝",
    url: fangfengzhen,
    date: "2019 . 10",
  },
  {
    name: "可爱的🐶",
    url: gougou,
    date: "2019 . 10",
  },
  {
    name: "篝火🔥",
    url: gouhuo,
    date: "2022 . 12",
  },
  {
    name: "好天气☁️",
    url: haotianqi,
    date: "2020 . 12",
  },
  {
    name: "普吉岛的海",
    url: kanhai,
    date: "2018 . 12",
  },
  {
    name: "快艇浪花🌊",
    url: kuaiting,
    date: "2018 . 12",
  },
];
const s = [
  {
    name: "重庆的桥",
    url: chongqingqiao,
    date: "2022 . 10",
  },
  {
    name: "凌空的夜",
    url: lingkongye,
    date: "2019 . 12",
  },
  {
    name: "凌空的傍晚",
    url: linkong,
    date: "2019 . 10",
  },
  {
    name: "淀山湖露营",
    url: luying,
    date: "2022 . 11",
  },
  {
    name: "我家可爱的猫🐱",
    url: mao,
    date: "2021 . 10",
  },
  {
    name: "我家可爱的猫🐱",
    url: mao2,
    date: "2021 . 10",
  },
  {
    name: "好吃的牛排",
    url: meishi,
    date: "2022 . 11",
  },
  {
    name: "南京 · 明孝陵",
    url: mingxiaoling,
    date: "2022 . 08",
  },
  {
    name: "莫干山· 夏日漂流",
    url: moganshanhaotianqi,
    date: "2022 . 07",
  },
  {
    name: "莫干山· 猫🐱",
    url: moganshanmao,
    date: "2022 . 10",
  },
  {
    name: "南昌 · 摩天轮",
    url: motianlun,
    date: "2017 . 09",
  },
  {
    name: "舟山 · 枸杞岛",
    url: ongs,
    date: "2020 . 04",
  },
  {
    name: "普吉岛 · 日出",
    url: pujidao,
    date: "2018 . 12",
  },
  {
    name: "淀山湖露营🐶",
    url: luyinggou,
    date: "2018 . 12",
  },
];
const t = [
  {
    name: "启东 · 团建 · 玩水",
    url: qidong,
    date: "2021 . 07",
  },
  {
    name: "千岛湖 · 团建 · 烟雨江南",
    url: qiandaohu,
    date: "2019 . 09",
  },
  {
    name: "上海的夜晚",
    url: yeshanghai,
    date: "2021 . 08",
  },
  {
    name: "山⛰️",
    url: shan,
    date: "2019 . 10",
  },
  {
    name: "捕捉到的晚霞🌇",
    url: wanxia,
    date: "2022 . 07",
  },
  {
    name: "普吉岛 · 海",
    url: water,
    date: "2018 . 12",
  },
  {
    name: "舟山 · 无人村",
    url: wurencun,
    date: "2020 . 04",
  },
  {
    name: "梅雨上海",
    url: xiayu,
    date: "2022 . 07",
  },
  {
    name: "宁波 · 象山",
    url: xiebei,
    date: "2020 . 10",
  },
  {
    name: "西湖盛开的樱花🌸",
    url: xihuyinghua,
    date: "2023 . 04",
  },
  {
    name: "朴树",
    url: pushu,
    date: "2021 . 07",
  },
  {
    name: "22.06 解封后的外滩行",
    url: yiqingwaitan,
    date: "2022 . 06",
  },
  {
    name: "宜昌",
    url: yichangshi,
    date: "2017 . 10",
  },
  {
    name: "民宿 · 泳池",
    url: yongchi,
    date: "2022 . 07",
  },
  {
    name: "好看的云",
    url: yun,
    date: "2022 . 07",
  },
];

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState("");
  return (
    <Section
      id="contact"
      className={styles.contact}
      style={{ backgroundAttachment: isMobile ? "initial" : "fixed" }}
    >
      <Back />
      <div id="content" className={styles.content}>
        <div id="page" className={styles.page}>
          <div className={styles.root}>
            <div className={`${styles.photoColumn} ${styles.photoColumn3} `}>
              {f.map((item) => {
                return (
                  <div key={item.url}>
                    <LazyLoad>
                      <img
                        src={item.url}
                        onClick={() => {
                          setVisible(true);
                          setUrl(item.url);
                        }}
                      />
                    </LazyLoad>

                    <div className={styles.photoDesc}>
                      <p>{item.name}</p>
                      <p className={styles.photoDate}>{item.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`${styles.photoColumn} ${styles.photoColumn3} `}>
              {s.map((item) => {
                return (
                  <div key={item.url}>
                    <LazyLoad>
                      <img
                        src={item.url}
                        onClick={() => {
                          setVisible(true);
                          setUrl(item.url);
                        }}
                      />
                    </LazyLoad>
                    <div className={styles.photoDesc}>
                      <p>{item.name}</p>
                      <p className={styles.photoDate}>{item.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`${styles.photoColumn} ${styles.photoColumn3} `}>
              {t.map((item) => {
                return (
                  <div key={item.url}>
                    <LazyLoad>
                      <img
                        src={item.url}
                        onClick={() => {
                          setVisible(true);
                          setUrl(item.url);
                        }}
                      />
                    </LazyLoad>
                    <div className={styles.photoDesc}>
                      <p>{item.name}</p>
                      <p className={styles.photoDate}>{item.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Image
        width={200}
        style={{ display: "none" }}
        preview={{
          visible,
          src: url,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </Section>
  );
};

export default Contact;
