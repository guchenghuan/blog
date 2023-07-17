/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-07-03 20:53:09
 * @FilePath: /me/src/sections/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FC } from "react";

import styles from "./styles.module.scss";
import me from "../../assets/screenshots/me.jpg";
import weibo from "../../assets/screenshots/weibo.png";
import juejin from "../../assets/screenshots/juejin.png";
import github from "../../assets/screenshots/github.png";
import wechat from "../../assets/screenshots/wechat.png";
import contact from "../../assets/screenshots/contact.jpg";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Title from "../../components/Title";
import { Tooltip } from "antd";

const Right: FC = () => {
  return (
    <div className={styles.leftDesc}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={me} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.group}>
              <div style={{ display: "flex" }}>
                <h4 className={styles.desc}>所在地区:</h4>
                <span className={styles.descContent}>上海市</span>
              </div>
              <div style={{ display: "flex" }}>
                <h4 className={styles.desc}>出生年月:</h4>
                <span className={styles.descContent}>1995 06-27</span>
              </div>
              <div style={{ display: "flex" }}>
                <h4 className={styles.desc}>个人介绍:</h4>
                <span className={styles.descContent}>做对、且有意义的事！</span>
              </div>
            </div>
            <div className={styles.data}>
              <div>
                <h3>
                  18 <br />
                  <span>博客</span>
                </h3>
              </div>
              {/* <span style="border:solid 0.1px #555;"></span> */}
              <div>
                <h3>
                  2 <br />
                  <span>随记</span>
                </h3>
              </div>
              {/* <span style="border:solid 1px #555;"></span> */}
              <div>
                <h3>
                  10 <br />
                  <span>ITU</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  width: "50%",
                  justifyContent: "space-around",
                }}
              >
                <a href="https://juejin.cn/user/2647279731480477">
                  <img
                    src={juejin}
                    alt="juejin"
                    className={styles.contactImg}
                  />
                </a>
                <a href="https://weibo.com/u/5874458139">
                  <img src={weibo} alt="weibo" className={styles.contactImg} />
                </a>
                <a href="https://github.com/guchenghuan">
                  <img
                    src={github}
                    alt="github"
                    className={styles.contactImg}
                  />
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
    </div>
  );
};
export default Right;
