import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../Components/common/Loading";
import CancellationPolicyItems from "../../Components/features/policies/CancellationPolicyItems";
import NoShowPolicyItems from "../../Components/features/policies/NoShowPolicyItems";
import { getPoliciesByPropertyIdSelector } from "../../Store/property/selectors";
import {
  editPolicyThunk,
  initializeDataThunk,
} from "../../Store/property/thunks";
import { AppDispatch } from "../../Store/store";
import { Policy, RootState } from "../../Types/types";

import Breadcrumb from "../../Components/common/Breadcrumb";
import { generateBreadcrumbItems } from "../../Utils/itemsGenerator";
import { Container } from "./styles";

const PoliciesPage: React.FC = () => {
  const { id: propertyId } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const policies: Policy[] = useSelector((state: RootState) =>
    propertyId ? getPoliciesByPropertyIdSelector(propertyId)(state) : []
  );
  const items = generateBreadcrumbItems("policies", undefined, propertyId);

  useEffect(() => {
    if (!policies.length) {
      dispatch(initializeDataThunk());
    }
  }, [dispatch, policies.length]);

  if (!policies.length) return <Loading />;

  const noShowPolicies = policies.filter((policy) => !policy.reference);
  const cancellationPolicies = policies.filter((policy) => policy.reference);

  const handleSave = (updatedPolicy: Policy) => {
    dispatch(editPolicyThunk(updatedPolicy));
  };

  return (
    <Container>
      <Breadcrumb items={items} />
      <h1>Property Policies</h1>
      <NoShowPolicyItems policies={noShowPolicies} onSave={handleSave} />
      <CancellationPolicyItems
        policies={cancellationPolicies}
        onSave={handleSave}
      />
    </Container>
  );
};

export default PoliciesPage;
