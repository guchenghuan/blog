import React, { AllHTMLAttributes, FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Paragraph: FC<AllHTMLAttributes<HTMLParagraphElement>> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <div {...restProps} className={classNames(className, styles.paragraph)}>
      {children}
    </div>
  );
};

export default Paragraph;
