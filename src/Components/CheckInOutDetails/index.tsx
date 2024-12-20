import React from "react";
import Card from "../common/Card";
import FlexContainer from "../common/LabeledItemList";

interface CheckInOutDetailsProps {
  checkInTime: string;
  checkOutTime: string;
  timezone: string;
}

const CheckInOutDetails: React.FC<CheckInOutDetailsProps> = ({
  checkInTime,
  checkOutTime,
  timezone,
}) => {
  const items = [
    {
      title: "Check-In Time",
      label: checkInTime,
    },
    {
      title: "Check-Out Time",
      label: checkOutTime,
    },
    {
      title: "Timezone",
      label: timezone,
    },
  ];

  return (
    <Card title="Check-In/Out Information">
      <FlexContainer items={items} />
    </Card>
  );
};

export default CheckInOutDetails;
