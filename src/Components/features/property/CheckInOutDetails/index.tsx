import { generateCheckInOutItems } from "../../../../Utils/propertyItemsGenerator";
import { CheckInOutDetailsProps } from "../../../../Utils/types";
import Card from "../../../common/Card";
import PropertyItemList from "../../../common/PropertyItemList";

const CheckInOutDetails: React.FC<CheckInOutDetailsProps> = (props) => {
  const items = generateCheckInOutItems(props);

  return (
    <Card title="Check-in/out Information">
      <PropertyItemList items={items} />
    </Card>
  );
};

export default CheckInOutDetails;
