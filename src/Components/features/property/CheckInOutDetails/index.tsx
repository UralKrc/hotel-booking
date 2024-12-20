import { generateCheckInOutItems } from "../../../../Utils/itemsGenerator";
import { CheckInOutDetailsProps } from "../../../../Utils/types";
import Card from "../../../common/Card";
import LabeledItemList from "../../../common/LabeledItemList";

const CheckInOutDetails: React.FC<CheckInOutDetailsProps> = (props) => {
  const items = generateCheckInOutItems(props);

  return (
    <Card title="Check-in/out Information">
      <LabeledItemList items={items} />
    </Card>
  );
};

export default CheckInOutDetails;
