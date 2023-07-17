/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-05-23 20:59:59
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-07-03 20:47:36
 * @FilePath: /me/src/sections/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FC } from "react";
import styles from "./styles.module.scss";
import { Articles } from "./constants";
import { Space } from "antd";

const openArticle = (val: string): void => {
  window.open(`https://juejin.cn/post/${val}`);
};
const Middle: FC = () => {
  return (
    <div className={styles.contentCard}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          borderRadius: "5px",
        }}
      ></div>
      {Articles.map((item) => {
        return (
          <figure className={styles.snip1477} key={item.article_id}>
            <img src={item.cover_image} alt={item.cover_image} />
            <div className={styles.title}>
              <div>
                <h4>{item.title}</h4>
              </div>
            </div>
            <div
              className={styles.btn}
              onClick={() => openArticle(item.article_id)}
            >
              <Space>
                👀{item.view_count}
                {""} 👍{item.digg_count}
                {""}💬{item.comment_count} {""}⭐️ {item.collect_count}
              </Space>
            </div>
            <figcaption>
              <p className={styles.contentDesc}>{item.brief_content}</p>
            </figcaption>
            <a
              href={`https://juejin.cn/post/${item.article_id}`}
              target="_blank"
            ></a>
          </figure>
        );
      })}
    </div>
  );
};

export default Middle;
