import React from "react";
import Card from "../common/Card";
import FlexContainer from "../common/LabeledItemList";

interface PropertyInformationProps {
  currency: string;
  rooms: number;
  status: boolean;
  isAvailableForPartnerships: boolean;
}

const PropertyInformation: React.FC<PropertyInformationProps> = ({
  currency,
  rooms,
  status,
  isAvailableForPartnerships,
}) => {
  const items = [
    {
      title: "Currency",
      label: currency,
    },
    {
      title: "Total Rooms",
      label: rooms.toString(),
    },
    {
      title: "Status",
      label: status ? "Available" : "Unavailable",
    },
    {
      title: "Available for Partnerships",
      label: isAvailableForPartnerships ? "Yes" : "No",
    },
  ];

  return (
    <Card title="Availability">
      <FlexContainer items={items} />
    </Card>
  );
};

export default PropertyInformation;
