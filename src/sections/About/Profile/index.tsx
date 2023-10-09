/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-10-09 10:39:13
 * @FilePath: /me/src/sections/About/Profile/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import avatar from "../../../assets/screenshots/qirong.jpg";
import Paragraph from "../../../components/Paragraph";
import HighLight from "../../../components/HighLight";
import useLottie from "../../../hooks/useLottie";

const cubeLottie =
  "https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json";

const Profile = () => {
  const cubeRef = useLottie(cubeLottie);

  return (
    <Row gutter={36} className={styles.profile}>
      <Col
        lg={{ span: 11, order: 1 }}
        span={24}
        order={3}
        className={styles.details}
      >
        <Fade bottom>
          <Paragraph>
            一个 <HighLight>测试 / 测试开发 / 前端开发</HighLight>{" "}
            ，江苏盐城人。 先后在 <HighLight>携程 @ 上海 </HighLight>{" "}
            金融事业部做测试开发，<HighLight>bilibili @ 上海 </HighLight>{" "}
            主站技术中心做测试开发 ，<HighLight>bilibili @ 上海 </HighLight>{" "}
            光呆项目部做前端开发，现在在 <HighLight>小红书 @ 上海</HighLight>{" "}
            做QA前端开发。
          </Paragraph>
          {/* <Paragraph>
            高考之后，飞去 <HighLight>东北大学 @ 沈阳</HighLight> 上了 4
            年学，毕业之后去 <HighLight>加州大学 @ 尔湾分校</HighLight> 读了 2
            年研究生。 刷了不少
            LeetCode、掉了不少头发、去过不少地方，感叹过世界之大。
          </Paragraph> */}
        </Fade>

        <div className={styles.lottie} ref={cubeRef} />

        <Fade bottom>
          <Paragraph>
            <strong style={{ width: "100px" }}>看动漫：</strong>
            <span>入职B站前，不知道为什么要看番，入职B站后，真香～</span>
          </Paragraph>
          <Paragraph>
            <strong style={{ width: "100px" }}>写代码：</strong>
            <span>
              我实在是太喜欢写代码了,从接触
              JavaScript的那一刻开始，便是一发不可收拾！
            </span>
          </Paragraph>
          <Paragraph>
            <strong style={{ width: "100px" }}>思考：</strong>
            <span>
              在安静的时候喜欢思考(吾日三省吾身)。定期重审自己，反思有哪里做的不好，哪里可以做的更好
            </span>
          </Paragraph>
          <Paragraph>
            <strong style={{ width: "100px" }}>其他：</strong>
            <span>
              偶尔累了就play ball 🏀，或者在 <HighLight>峡谷之巅</HighLight>{" "}
              遨游 🎮。{" "}
            </span>
          </Paragraph>
        </Fade>
      </Col>

      <Col
        lg={{ span: 7, order: 2 }}
        span={14}
        order={1}
        className={styles.avatar}
      >
        <Fade top>
          <img src={avatar} alt="头像" />
        </Fade>
      </Col>

      <Col
        lg={{ span: 5, order: 3 }}
        span={24}
        order={1}
        className={styles.name}
      >
        <p style={{ fontSize: "9em" }}>IMT</p>
      </Col>
    </Row>
  );
};

export default Profile;
