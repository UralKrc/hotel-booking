import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertiesTable from "../../Components/features/property/PropertiesTable";
import { getPropertiesSelector } from "../../Store/property/selectors";
import { fetchProperties } from "../../Store/property/thunks";
import { AppDispatch } from "../../Store/store";
import { Container } from "./styles";
import { RootState } from "../../Types/types";

const PropertiesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const properties = useSelector(getPropertiesSelector);
  const error = useSelector((state: RootState) => state.property.error);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <Container>
      <h3>Properties</h3>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <PropertiesTable properties={properties} />
      )}
    </Container>
  );
};

export default PropertiesPage;
