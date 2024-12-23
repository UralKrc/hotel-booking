import { Image } from "antd";
import styled from "styled-components";

export const Container = styled.div<{ children: React.ReactNode }>`
  margin: 2rem 0;
  padding: 0 0.5rem;

  .slick-track {
    text-align: center;
  }

  .ant-image {
    width: 100%;
    max-width: 1200px;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.borderRadiuses.sm};
  object-fit: cover;
  min-height: 290px;
  width: 100%;
  max-height: 768px;
`;
