import { Carousel } from "antd";
import React, { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

export const CarouselComponent: React.FC<CarouselProps> = ({ children }) => (
  <Carousel autoplay>{children}</Carousel>
);

export default CarouselComponent;
