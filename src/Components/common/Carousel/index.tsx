import { CarouselProps } from "antd";
import React from "react";
import { StyledCarousel } from "./styles";

export const Carousel: React.FC<CarouselProps> = ({ children }) => (
  <StyledCarousel>{children}</StyledCarousel>
);

export default Carousel;
