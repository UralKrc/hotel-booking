import { CheckInOutDetailsProps } from "../../../../Types/types";
import { generateCheckInOutItems } from "../../../../Utils/itemsGenerator";
import Card from "../../../common/Card";
import PropertyItemList from "../../../common/ItemList";

const CheckInOutDetails: React.FC<CheckInOutDetailsProps> = (props) => {
  const items = generateCheckInOutItems(props);

  return (
    <Card title="Check-in/out Information">
      <PropertyItemList items={items} />
    </Card>
  );
};

export default CheckInOutDetails;
