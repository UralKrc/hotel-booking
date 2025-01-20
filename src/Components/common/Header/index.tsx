import Logo from "../Logo";
import { StyledHeader } from "./styles";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
