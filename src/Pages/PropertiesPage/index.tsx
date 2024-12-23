import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/common/Loading";
import PropertiesTable from "../../Components/features/property/PropertiesTable";
import { getPropertiesSelector } from "../../Store/property/selectors";
import { initializeDataThunk } from "../../Store/property/thunks";
import { AppDispatch } from "../../Store/store";
import { Property, RootState } from "../../Types/types";
import { Container } from "./styles";

const PropertiesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const properties: Property[] = useSelector(getPropertiesSelector);
  const loading = useSelector((state: RootState) => state.property.loading);

  useEffect(() => {
    if (!properties) {
      dispatch(initializeDataThunk());
    }
  }, [dispatch, properties]);

  if (loading) return <Loading />;

  return (
    <Container>
      <h1>Properties</h1>
      <PropertiesTable properties={properties} />
    </Container>
  );
};

export default PropertiesPage;
