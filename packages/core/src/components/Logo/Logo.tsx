import React from "react";
import cn from "classnames";
import ImgLog from "../../assets/imgs/img-logo.svg";
import './logo.scss'

type LogoProps = {
  size?: Size;
};

export type Size = "lg";

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <a href="https://matbea.com/en" target='_blank' className="logo">
      <div
        className={cn("logo__content", {
          [`logo__content--size-${size}`]: size,
        })}
      >
        <ImgLog width='100%' height='100%'/>
      </div>
    </a>
  );
};
