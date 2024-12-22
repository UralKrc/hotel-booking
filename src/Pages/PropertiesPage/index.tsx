import { Flex } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/common/Button";
import PropertiesTable from "../../Components/features/property/PropertiesTable";
import { getPropertiesSelector } from "../../Store/property/selectors";
import { fetchProperties } from "../../Store/property/thunks";
import { AppDispatch } from "../../Store/store";
import { RootState } from "../../Types/types";
import { Container } from "./styles";

const PropertiesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const properties = useSelector(getPropertiesSelector);
  const error = useSelector((state: RootState) => state.property.error);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const refetchInitialData = () => {
    localStorage.removeItem("propertiesData"); // Clear local storage
    window.location.reload(); // Reload the page
  };

  return (
    <Container>
      <h3>Properties</h3>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <Flex vertical gap="small">
          <PropertiesTable properties={properties} />
          {properties.length === 0 ? (
            <Button onClick={refetchInitialData} text="Refetch Initial Data" />
          ) : null}
        </Flex>
      )}
    </Container>
  );
};

export default PropertiesPage;
