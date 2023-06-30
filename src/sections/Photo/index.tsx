import * as React from "react";
import Section from "../../components/Section";
import { Image } from "antd";
import LazyLoad from "react-lazyload";
import { detectMobile } from "../../utils";
import Left from "../../components/left";
import styles from "./styles.module.scss";
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
interface obj {
  name: string;
  url: string;
  date: string;
  ref: React.RefObject<HTMLImageElement>;
}

interface IState {
  f: Array<obj>;
  s: Array<obj>;
  t: Array<obj>;
  isMobile: boolean;
  visible: boolean;
  url: string;
  count: number;
  F: Array<obj>;
  S: Array<obj>;
  T: Array<obj>;
}

class Infinite extends React.Component<IState> {
  state: IState = {
    f: [
      {
        name: "天空之城",
        url: airplane,
        date: "2020 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "安吉露营",
        url: anjiluying,
        date: "2022 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "重庆",
        url: chongqing,
        date: "2022 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "恋爱",
        url: lianai,
        date: "2022 . 11",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "普吉岛出海",
        url: chuhai,
        date: "2018 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "上海迪士尼",
        url: dishini,
        date: "2022 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "放风筝",
        url: fangfengzhen,
        date: "2019 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "可爱的🐶",
        url: gougou,
        date: "2019 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "篝火🔥",
        url: gouhuo,
        date: "2022 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "好天气☁️",
        url: haotianqi,
        date: "2020 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "普吉岛的海",
        url: kanhai,
        date: "2018 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "快艇浪花🌊",
        url: kuaiting,
        date: "2018 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
    ],
    s: [
      {
        name: "重庆的桥",
        url: chongqingqiao,
        date: "2022 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "凌空的夜",
        url: lingkongye,
        date: "2019 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "凌空的傍晚",
        url: linkong,
        date: "2019 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "淀山湖露营",
        url: luying,
        date: "2022 . 11",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "我家可爱的猫🐱",
        url: mao,
        date: "2021 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "我家可爱的猫🐱",
        url: mao2,
        date: "2021 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "好吃的牛排",
        url: meishi,
        date: "2022 . 11",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "南京 · 明孝陵",
        url: mingxiaoling,
        date: "2022 . 08",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "莫干山· 夏日漂流",
        url: moganshanhaotianqi,
        date: "2022 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "莫干山· 猫🐱",
        url: moganshanmao,
        date: "2022 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "南昌 · 摩天轮",
        url: motianlun,
        date: "2017 . 09",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "舟山 · 枸杞岛",
        url: ongs,
        date: "2020 . 04",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "普吉岛 · 日出",
        url: pujidao,
        date: "2018 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "淀山湖露营🐶",
        url: luyinggou,
        date: "2018 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
    ],
    t: [
      {
        name: "启东 · 团建 · 玩水",
        url: qidong,
        date: "2021 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "千岛湖 · 团建 · 烟雨江南",
        url: qiandaohu,
        date: "2019 . 09",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "上海的夜晚",
        url: yeshanghai,
        date: "2021 . 08",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "山⛰️",
        url: shan,
        date: "2019 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "捕捉到的晚霞🌇",
        url: wanxia,
        date: "2022 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "普吉岛 · 海",
        url: water,
        date: "2018 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "舟山 · 无人村",
        url: wurencun,
        date: "2020 . 04",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "梅雨上海",
        url: xiayu,
        date: "2022 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "宁波 · 象山",
        url: xiebei,
        date: "2020 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "西湖盛开的樱花🌸",
        url: xihuyinghua,
        date: "2023 . 04",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "朴树",
        url: pushu,
        date: "2021 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "22.06 解封后的外滩行",
        url: yiqingwaitan,
        date: "2022 . 06",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "宜昌",
        url: yichangshi,
        date: "2017 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "民宿 · 泳池",
        url: yongchi,
        date: "2022 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "好看的云",
        url: yun,
        date: "2022 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
    ],
    isMobile: detectMobile(),
    visible: false,
    url: "",
    count: 0,
    F: [
      {
        name: "天空之城",
        url: airplane,
        date: "2020 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "安吉露营",
        url: anjiluying,
        date: "2022 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "重庆",
        url: chongqing,
        date: "2022 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
    ],
    S: [
      {
        name: "重庆的桥",
        url: chongqingqiao,
        date: "2022 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "凌空的夜",
        url: lingkongye,
        date: "2019 . 12",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "凌空的傍晚",
        url: linkong,
        date: "2019 . 10",
        ref: React.createRef<HTMLImageElement>(),
      },
    ],
    T: [
      {
        name: "启东 · 团建 · 玩水",
        url: qidong,
        date: "2021 . 07",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "千岛湖 · 团建 · 烟雨江南",
        url: qiandaohu,
        date: "2019 . 09",
        ref: React.createRef<HTMLImageElement>(),
      },
      {
        name: "上海的夜晚",
        url: yeshanghai,
        date: "2021 . 08",
        ref: React.createRef<HTMLImageElement>(),
      },
    ],
  };

  public componentDidMount(): void {
    window.addEventListener<"scroll">("scroll", () => {
      const scroolTop: number = document.documentElement.scrollTop;
      const scroolHeight: number = document.documentElement.scrollHeight;
      const clientH: number = document.documentElement.clientHeight;
      if (scroolTop + clientH >= scroolHeight) {
        this.insertTo();
      }
    });
  }

  private insertTo(): void {
    this.state.count += 1;
    const num = 3 + 3 * this.state.count;
    const { f, s, t } = this.state;
    if (num < f.length) {
      this.setState({
        F: f.slice(0, num),
      });
    }
    if (num < s.length) {
      this.setState({
        S: s.slice(0, num),
      });
    }
    if (num < t.length) {
      this.setState({
        T: t.slice(0, num),
      });
    }
  }
  onShow(item: obj): void {
    this.setState({
      visible: true,
      url: item.url,
    });
  }

  public render(): React.ReactNode {
    const { F, S, T } = this.state;
    return (
      <React.Fragment>
        <Section
          id="contact"
          className={styles.contact}
          style={{
            backgroundAttachment: this.state.isMobile ? "initial" : "fixed",
          }}
        >
          <div style={{ marginBottom: "50px" }}>
            <Left />
          </div>
          <div id="content" className={styles.content}>
            <div id="page" className={styles.page}>
              <div className={styles.root}>
                <div
                  className={`${styles.photoColumn} ${styles.photoColumn3} `}
                >
                  {F.map((item: obj) => {
                    return (
                      <div key={item.url}>
                        <LazyLoad>
                          <img
                            src={item.url}
                            ref={item.ref}
                            onClick={() => this.onShow(item)}
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
                <div
                  className={`${styles.photoColumn} ${styles.photoColumn3} `}
                >
                  {S.map((item: obj) => {
                    return (
                      <div key={item.url}>
                        <LazyLoad>
                          <img
                            src={item.url}
                            ref={item.ref}
                            onClick={() => this.onShow(item)}
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
                <div
                  className={`${styles.photoColumn} ${styles.photoColumn3} `}
                >
                  {T.map((item: obj) => {
                    return (
                      <div key={item.url}>
                        <LazyLoad>
                          <img
                            src={item.url}
                            ref={item.ref}
                            onClick={() => this.onShow(item)}
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
              visible: this.state.visible,
              src: this.state.url,
              onVisibleChange: (value) => {
                this.setState({
                  visible: false,
                });
              },
            }}
          />
        </Section>
      </React.Fragment>
    );
  }
}

export default Infinite;
