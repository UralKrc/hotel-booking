import { generateContactItems } from "../../../../Utils/itemsGenerator";
import { ContactDetailsProps } from "../../../../Utils/types";
import Card from "../../../common/Card";
import LabeledItemList from "../../../common/LabeledItemList";

const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
  const items = generateContactItems(props);

  return (
    <Card title="Contact Details">
      <LabeledItemList items={items} />
    </Card>
  );
};

export default ContactDetails;
