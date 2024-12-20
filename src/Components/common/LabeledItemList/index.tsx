import { Flex } from "antd";
import { ReactNode } from "react";
import { ContainerTitle } from "./styles";

interface LabeledItemListProps {
  items: { title: string; label?: ReactNode }[];
  vertical?: boolean;
}

const LabeledItemList: React.FC<LabeledItemListProps> = ({
  items,
  vertical,
}) => {
  return (
    <>
      {items.map((item: { title: string; label?: ReactNode }) => (
        <Flex key={item.title} gap="small" vertical={vertical} align="center">
          {item.label ? <ContainerTitle>{item.title}:</ContainerTitle> : null}
          {item.label ? <div>{item.label}</div> : null}
        </Flex>
      ))}
    </>
  );
};

export default LabeledItemList;
