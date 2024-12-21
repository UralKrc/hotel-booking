import React from "react";
import { generatePropertyInformationItems } from "../../../../Utils/propertyItemsGenerator";
import { PropertyDetailsProps } from "../../../../Utils/types";
import Card from "../../../common/Card";
import PropertyItemList from "../../../common/PropertyItemList";

const PropertyInformation: React.FC<PropertyDetailsProps> = (props) => {
  const items = generatePropertyInformationItems(props);

  return (
    <Card title="Availability">
      <PropertyItemList items={items} />
    </Card>
  );
};

export default PropertyInformation;
