import { Flex } from "antd";
import { ReactNode } from "react";
import { ContainerTitle } from "./styles";
import { PropertyItemListProps } from "./types";

const PropertyItemList: React.FC<PropertyItemListProps> = ({
  items,
  vertical,
  align = "center",
}) => {
  return (
    <>
      {items.map((item: { title: string; label?: ReactNode }) => (
        <Flex key={item.title} gap="small" vertical={vertical} align={align}>
          {item.label ? <ContainerTitle>{item.title}:</ContainerTitle> : null}
          {item.label ? <span>{item.label}</span> : null}
        </Flex>
      ))}
    </>
  );
};

export default PropertyItemList;
