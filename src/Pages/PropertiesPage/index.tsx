import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropertiesTable } from "../../Components/features/property/PropertiesTable";
import { getPropertiesRequest } from "../../Store/property/actions";
import { getPropertiesSelector } from "../../Store/property/selectors";
import { Container } from "./styles";

const PropertiesPage = () => {
  const dispatch = useDispatch();
  const properties = useSelector(getPropertiesSelector);

  useEffect(() => {
    dispatch(getPropertiesRequest());
  }, [dispatch]);

  return (
    <Container>
      <h3>Properties</h3>
      <PropertiesTable properties={properties} />
    </Container>
  );
};

export default PropertiesPage;
