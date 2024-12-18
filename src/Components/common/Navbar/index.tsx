import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = useMemo(
    () => [
      {
        label: "Properties",
        key: "properties",
      },
    ],
    [],
  );

  const onClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return <Menu onClick={onClick} mode="horizontal" items={items} />;
};

export default Navbar;
