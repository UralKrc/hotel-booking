import { Flex } from "antd";
import styled from "styled-components";

export const ItemContainer = styled(Flex)`
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemTitle = styled.span`
  min-width: 110px;
  font-weight: 500;
`;

export const ItemContent = styled.div`
  .ant-tag {
    margin-right: 0;
  }
`;
