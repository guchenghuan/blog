/*
 * @Author: guchenghuan guchenghuan@xiaohongshu.com
 * @Date: 2023-06-19 21:44:15
 * @LastEditors: guchenghuan guchenghuan@xiaohongshu.com
 * @LastEditTime: 2023-06-19 21:44:56
 * @FilePath: /me/src/sections/Photo/useIntersectionObserver.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRef } from "react";
import { useDeepCompareEffect, useMount, useUnmount } from "ahooks";

const useIntersectionObserver = (domList: any, deps = [0]) => {
  // 接收两个参数，dom元素的class和指定交叉比例(threshold)的依赖项

  const ioRef = useRef<any>();

  useMount(() => {
    ioRef.current = new IntersectionObserver(
      (entries) => {
        // 观察者
        entries.forEach((item: any) => {
          // entries 是被监听的dom集合，是一个数组
          if (item.intersectionRatio <= 0) return; // intersectionRatio 是可见度 如果当前元素不可见就结束该函数。
          const { target } = item;
          target.src = target.dataset.src; // 将 h5 自定义属性赋值给 src (进入可见区则加载图片)
        });
      },
      {
        threshold: deps, // 用来指定交叉比例，决定什么时候触发回调函数，是一个数组，默认是[0]。
      }
    );
  });

  useUnmount(() => {
    ioRef.current.disconnect(); // 组件卸载时关闭观察器
  });

  // useDeepCompare用法同useEffect一样，不同的是依赖项里如果有复杂数据，如对象、数组等，对比的是每一项是否相等，这样在对象或者数组没有变化时，就不会再次执行回调函数。
  useDeepCompareEffect(() => {
    domList.forEach((item: any) => ioRef.current.observe(item)); // observe 开始观察，接受一个DOM节点对象
  }, [domList]);
};

export default useIntersectionObserver;
