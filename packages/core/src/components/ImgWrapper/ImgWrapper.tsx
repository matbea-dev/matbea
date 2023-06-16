import React from "react";

type ImgWrapperProps = {
  children: React.ReactNode;
};

export const ImgWrapper: React.FC<ImgWrapperProps> = ({ children }) => (
  <div className="img-wrapper">{children}</div>
);
