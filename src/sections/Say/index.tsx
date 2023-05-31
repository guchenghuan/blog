import React from "react";
import Fade from "react-reveal/Fade";
import Section from "../../components/Section";
import Title from "../../components/Title";
import styles from "./styles.module.scss";
import { detectMobile } from "../../utils";
import Back from "../../components/BackHome";

const isMobile = detectMobile();

const Contact = () => (
  <Section
    id="contact"
    className={styles.contact}
    style={{ backgroundAttachment: isMobile ? "initial" : "fixed" }}
  >
    <Back />
    <Title tag="h4" style={{ textAlign: "left" }}>
      与自己和解 👨‍⚕️
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            如果你给自己背负了太多事，太多压力，不妨试着放下，让自己放松下来去好好的爱自己
          </p>
          <p>
            其实人太容易进入一个误区了：那就是不同年龄段在和不同的人比较，当然一开始，这并非自己能决定。从出生的那一刻就“被迫”在比。谁考了第一，谁拿了奖学金等...
            “比较”这是成长中最大的误区
          </p>
          <p>
            这种误区，往往会给自己带来远远大于本身能承担的负担。如果你有过焦虑，有过痛苦，希望你放下它。与之相反，你要知道，自我的进步是贯穿生命始终的事
          </p>
          <p>
            这个世界，要去相信有人比你聪明，比你富有，同时也比你勤奋和努力。但是这个世界上也一定有人，比你笨，比你贫穷，比你懒惰和“摆烂”
          </p>
          <p>
            所以，要比，跟自己比，今天是不是比昨天更好，明天是不是会比今天更进步
          </p>
          <p>
            当你不再去在乎别人的时候，你的精神已经足够满足你的空虚和自卑。胸怀会因此而变得更加宽广。
          </p>
          <p>与自己和解，做个爱自己的人</p>
        </div>
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      不因世界而改变 ⛰️
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <blockquote style={{ width: "100%" }}>
            <p>
              {" "}
              通常牢骚发完之后，对方就会回以“辛苦的又不止你一个”这样的套话。为什么大家辛苦我就非得辛苦不可啊？这有什么逻辑关系吗？
            </p>
            <p style={{ textAlign: "right" }}>
              {" "}
              —— 《我的青春恋爱喜剧果然有问题》第七册 P217
            </p>
          </blockquote>
          <p>
            “不因世界而改变”是我身上最核心的特点，几乎所有的观念都派生于此。包括最具特点的时间是敌人
          </p>
          <p>
            {" "}
            不因无力改变而接受现在，也不因“其他人都是这样”而接受现状。过分是事情就是过分的事情，不因任何原因，来坦然接受过分的事情
          </p>
          <div className={`${styles.content} ${styles.contentCard} `}>
            <p>我不想勉强自己和不感兴趣的人打好关系</p>
            <p>因为与其他人一致而感到安心，荒唐至极</p>
            <p>我想抵抗理所当然出现在那里的人流</p>
            <p>虽然无法完全抵抗</p>
            <p> 我和那些只认为自己特别的人不同</p>
            <p>要成为，真正特别的人</p>
          </div>
          <p>我常常会在下班的归途中大声宣誓，向自己宣誓，向整个世界宣誓</p>
          <p>
            为什么随着时间的流逝就会让我认为重要的东西变得不重要？为什么其他员工都没半年升过职所以我也就不能半年升？为什么大家是这样，整个世界是这样，我也必须要这样？
          </p>
          <p>我绝不接受</p>
        </div>
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      疼与动力 💪
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>我不讨厌疼痛。不论是心理上的，还是物理上的</p>
          <p>
            {" "}
            或者说，我是拥抱疼痛，转而化为动力的那种人。痛苦、不甘、压力，对于我而言反而是正面
            Buff
          </p>
          <p>
            我当然也希望自己的动力来源是爱与信任，可惜这些是我不曾拥有的。因此我只能使用痛苦、不甘、压力作为前进动力，这是一种别无选择的选择。只是后来我发现这东西效果还不错
          </p>
          <p>久而久之，我不再已经讨厌它们了</p>
        </div>
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      黑色的小精灵 🌃
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>我喜欢黑夜，一度认为自己是“黑夜世界的居民”</p>
          <p>
            在黑夜中与自己独处。在黑夜中思考，在黑夜中挣扎，在黑夜中流泪，在黑夜中愉悦，与黑夜融于一体
          </p>
          <p>
            有时我甚至会躲在黑夜中的角落里，静静的注视着路过的那些成群结队欢声笑语的“明亮世界的居民”们。还好至今都没有人发现我，要不然可能会给对方留下不好的阴影（笑）
          </p>
          <p>
            之前看到有人写过，“黑夜中会不会有一群黑色的小精灵在跳一支黑色的舞”，我一方面惊叹于其憧憬的美好与文笔，也逐渐意识到，我可能就是文中那只黑色的小精灵。我会在黑暗中住下，呆很长的时间
          </p>
          <p>
            当有人追随黑暗来到一个偏僻的角落，推开一扇空教室的门，或是顺着楼梯爬上天台，那么就有可能发现在黑夜中“翩翩起舞”的我
          </p>
        </div>
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      关于标签 🏷️
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            贴标签其实非常正常的一件事情，贴标签就是分类，标签的作用就是好找，我们生活中也是一样
          </p>
          <p>
            标签帮助我们在纷繁复杂的信息当中分类，它就像屉子文件夹一样，所以标签的特点是效率高，不足是容易损失细节
          </p>
          <p>
            所以对我们来讲，我们认识一件事情，第一步都是贴标签，但是要记住，贴标签只是第一步，在完成了这一步之后，我们要更深入地了解更多，偏见是标签最大的副作用
          </p>
          <p>
            标签是意味着不同，可是我们很多时候，你觉得但凡与我们不同的东西，就不仅喜
            欢只分出你我，还喜欢分出高下，这几乎是所有歧视，最悲剧产生的根源
          </p>
        </div>
      </div>
    </Fade>
    <Title tag="h4" style={{ textAlign: "left" }}>
      懂得技术是用来创造价值的 💡
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            我总会对一件事情突然很感兴趣，去学习，去做。但是也很快对它就失去了热情和兴趣。尤其是厌倦一些“没有意义的重复劳动”
          </p>
          <p>
            如果你也这样，我希望你能慢慢的改变这种状态，学习技术的过程是刺激并富有挑战的。
            但不要因为慢慢的熟悉之后，而感到平淡乏味，
            学会一门技术的那种兴奋和成就感，并不是终点
          </p>
          <p>
            用你学成的技术为团队创造价值才是这门技术的价值，也是你自己的价值
          </p>
          <p>
            而如果只是学会了这门技术，却并没有使用它做成什么事情，或许在回忆这件事的时候，觉得可惜，甚至郁郁不得志
          </p>
          <p>
            我们早晚都要在一个地方稳定下去的，但随着年龄的增长，我们又有多少次机会可以挥霍呢
          </p>
        </div>
      </div>
    </Fade>
  </Section>
);

export default Contact;
