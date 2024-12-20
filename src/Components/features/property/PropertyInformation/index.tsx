import React from "react";
import { generatePropertyInformationItems } from "../../../../Utils/itemsGenerator";
import { PropertyDetailsProps } from "../../../../Utils/types";
import Card from "../../../common/Card";
import LabeledItemList from "../../../common/LabeledItemList";

const PropertyInformation: React.FC<PropertyDetailsProps> = (props) => {
  const items = generatePropertyInformationItems(props);

  return (
    <Card title="Availability">
      <LabeledItemList items={items} />
    </Card>
  );
};

export default PropertyInformation;
