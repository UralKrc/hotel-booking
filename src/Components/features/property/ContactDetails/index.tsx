import { generateContactItems } from "../../../../Utils/propertyItemsGenerator";
import { ContactDetailsProps } from "../../../../Utils/types";
import Card from "../../../common/Card";
import PropertyItemList from "../../../common/PropertyItemList";

const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
  const items = generateContactItems(props);

  return (
    <Card title="Contact Details">
      <PropertyItemList items={items} />
    </Card>
  );
};

export default ContactDetails;
