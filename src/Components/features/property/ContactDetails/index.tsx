import { ContactDetailsProps } from "../../../../Types/types";
import { generateContactItems } from "../../../../Utils/itemsGenerator";
import Card from "../../../common/Card";
import PropertyItemList from "../../../common/PropertyItemList";

const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
  const items = generateContactItems(props);

  return (
    <Card title="Contact Details">
      <PropertyItemList items={items} align="start" />
    </Card>
  );
};

export default ContactDetails;
