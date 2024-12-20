import { Carousel } from "antd";
import styled from "styled-components";

export const StyledCarousel = styled(Carousel)`
  height: 100%;

  .slick-dots li button {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    opacity: 0.5;
  }
`;
