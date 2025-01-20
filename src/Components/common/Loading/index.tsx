import { Col, Spin } from "antd";
import { StyledRow } from "./styles";

const Loading: React.FC = () => {
  return (
    <StyledRow justify="center" align="middle">
      <Col>
        <Spin size="large" />
      </Col>
    </StyledRow>
  );
};

export default Loading;
