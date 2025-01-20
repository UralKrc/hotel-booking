import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Components/common/Breadcrumb";
import Loading from "../../Components/common/Loading";
import PropertyDetails from "../../Components/features/property/PropertyDetails";
import { getPropertyByIdSelector } from "../../Store/property/selectors";
import { fetchPropertyByIdThunk } from "../../Store/property/thunks";
import { AppDispatch } from "../../Store/store";
import { RootState } from "../../Types/types";
import { generateBreadcrumbItems } from "../../Utils/itemsGenerator";
import { Container } from "./styles";

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const property = useSelector((state: RootState) => {
    if (!id) return null;
    return getPropertyByIdSelector(id)(state);
  });
  const error = useSelector((state: RootState) => state.property.error);
  const items = generateBreadcrumbItems(
    "property",
    property?.property.name,
    property?.property.id
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyByIdThunk(id));
    }
  }, [id, dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!property) {
    return <Loading />;
  }

  const { property: propertyDetails } = property;

  return (
    <Container>
      <Breadcrumb items={items} />
      <PropertyDetails propertyDetails={propertyDetails} />
    </Container>
  );
};

export default PropertyPage;
