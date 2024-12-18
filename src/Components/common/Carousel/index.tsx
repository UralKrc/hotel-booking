import React, { ReactNode } from "react";
import { StyledCarousel } from "./styles";

interface CarouselProps {
  children: ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => (
  <StyledCarousel autoplay>{children}</StyledCarousel>
);

export default Carousel;
