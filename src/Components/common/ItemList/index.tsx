import { Tag } from "antd";
import React from "react";
import { ItemContainer, ItemContent, ItemTitle } from "./styles";
import { ItemListProps } from "./types";

const ItemList: React.FC<ItemListProps> = ({
  items,
  vertical,
  align = "center",
}) => {
  return (
    <>
      {items.map((item) => (
        <ItemContainer
          key={item.title}
          gap="small"
          vertical={vertical}
          align={align}
        >
          <ItemTitle>{item.title}:</ItemTitle>
          <ItemContent>
            {item.label &&
              (item.icon ? (
                <Tag icon={item.icon} color={item.color}>
                  {item.label}
                </Tag>
              ) : (
                <span>{item.label}</span>
              ))}
          </ItemContent>
        </ItemContainer>
      ))}
    </>
  );
};

export default ItemList;
