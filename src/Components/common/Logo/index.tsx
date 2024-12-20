import { Flex } from "antd";
import { Link } from "react-router-dom";
import { StyledLogo, Subtitle } from "./styles";
const Logo: React.FC = () => {
  return (
    <Flex align="end" gap="small">
      <Link
        to={"https://katanox.com/"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <StyledLogo>Katanox</StyledLogo>
      </Link>
      <Subtitle>The travel growth engine</Subtitle>
    </Flex>
  );
};

export default Logo;
