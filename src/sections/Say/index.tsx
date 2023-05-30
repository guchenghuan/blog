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
      时间是敌人 ⏰
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>人类是线性生物</p>
          <p>
            心爱的狗狗死了，只会伤心一段时间。不久之后，又可以因为其他的事情而开怀大笑。而多年之后，也可以波澜不惊的提起此事
          </p>
          <p>时间可以冲淡一切，伤口也会愈合</p>
          <p>
            {" "}
            为什么此刻认为重要的事情慢慢变得不重要了，为什么曾经想得到的事物慢慢变得没那么渴望了。为什么自己在黑夜中终于找寻到的自己，立下的决心，天亮后又不见了
          </p>
          <p>但是这很奇怪啊难道不是吗？重要的事情因为时间而变得不再重要了！!</p>
          <p>我觉得不可理喻，无法接受，耻辱万分 我看过这样的一个故事：</p>
          <blockquote>
            <p>
              少女A有一个亲妹妹，特别要好的妹妹——相互信任、相互依赖、相互照顾、相互体谅。简直是理想中的姐妹关系
            </p>
            <p> 很不幸的是，一场交通事故带走了她的妹妹</p>
            <p>
              少女A悲痛欲绝。一幕幕的与妹妹朝夕相处的过往经历从少女A脑内放映——如果没有妹妹，未来会是怎样的呢？少女A完全无法想象没有妹妹的世界是怎样的
            </p>
            <p>尽管少女A非常痛苦，每天以泪洗面，但生活总归要进行下去</p>
            <p>
              随着时间的推移，少女A惊讶的发现自己没有那么伤心了。依旧可以在没有妹妹的情况下开怀大笑，依旧可以在没有妹妹的房间里倒头就睡
            </p>
            <p>少女A觉得自己重要的妹妹正在一步步的向自己远去</p>
            <p>
              于是，少女A拿着她妹妹生前使用的一条发带做了一个眼罩，遮住了自己的一边眼睛。少女A说：
            </p>
            <blockquote>
              <p> “每当我因为遮住一只眼睛而感到不便时，我就能感受到。。。”</p>
              <p> “我的妹妹就在我的身边”</p>
            </blockquote>
          </blockquote>
          <p> 我要扭转这个人类的本能，不因为其与生俱来而不去改变</p>
          <p>
            {" "}
            绝不能的让“眼前的东西”和“更容易获得的东西”，去代替了“更重要的东西”
          </p>
          <p>
            {" "}
            所以我写文章，给它们起一些好记的名字，订立属于自己的每年的“节日”，来不停的提醒自己不要忘记，不要忘记曾经的自己，不要忘记曾经渴望的事物，不要忘记曾经刻苦铭心的经历
          </p>
          <p> 时间是敌人</p>
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
          <p>
            因此，你能看到在北京地铁上我反抗的身影。你能听到在月光下我的《高音号宣言》：
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
      不谙世事与冷血 🧊
    </Title>
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>由于大部分时间都独来独往，加上社交少，不谙世事也是难免的事情</p>
          <p> 但是与此同时，你也许会同时看到一个稍稍“冷血”的我</p>
          <p>但是事实完全不是这样的</p>
          <p>
            一方面，由于过于不谙世事导致我对于人情世故的处理，因缺乏经验而稍显笨拙。另一方面，由于过多的思考，你能看到一个处处犹豫的我
          </p>
          <p>
            尤其是每当有人向我需求帮助时，总能看到我“犹豫”了很久后，才答应下来。而这个“犹豫”常常会被理解为“不情愿”，但是实际上完全不是这样的。只是因为想尽可能考虑周全后再做决定，我做任何决定都是会很犹豫
          </p>
          <p>经过犹豫的帮助依旧是帮助，经过犹豫的勇敢也依旧是勇敢</p>
          <p>
            与老好人和勇夫的那种“不考虑太多，大步向前”的风格不同。我会考虑再三，我会害怕，我会感到麻烦，我会想到逃跑。但是我不会逃跑，我会贯彻到底我认为正确的事
          </p>
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
      黑色的小精灵 🌌
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
  </Section>
);

export default Contact;
