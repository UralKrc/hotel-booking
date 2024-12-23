import { Flex } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledFlex = styled(Flex)`
  margin: 2rem 0;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Description = styled.p`
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 1rem;
  border-radius: 5px;
  margin: 0.5rem 0;
`;
