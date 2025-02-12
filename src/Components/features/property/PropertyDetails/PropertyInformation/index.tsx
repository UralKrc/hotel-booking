import React from "react";
import { PropertyDetailsProps } from "../../../../../Types/types";
import { generatePropertyInformationItems } from "../../../../../Utils/itemsGenerator";
import Card from "../../../../common/Card";
import PropertyItemList from "../../../../common/ItemList";

const PropertyInformation: React.FC<PropertyDetailsProps> = (props) => {
  const items = generatePropertyInformationItems(props);

  return (
    <Card title="General Information">
      <PropertyItemList items={items} />
    </Card>
  );
};

export default PropertyInformation;
