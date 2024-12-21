import { Flex, Table, TableProps } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePropertyThunk } from "../../../../Store/property/thunks";
import { AppDispatch } from "../../../../Store/store";
import { Property } from "../../../../Store/types";
import Button from "../../../common/Button";

interface PropertiesTableProps {
  properties: Property[];
}

const PropertiesTable: React.FC<PropertiesTableProps> = ({ properties }) => {
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch type
  const navigate = useNavigate();

  const handleRemoveProperty = (id: string) => {
    dispatch(removePropertyThunk(id));
    navigate("/");
  };

  const columns: TableProps<Property>["columns"] = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Actions",
      render: (_: unknown, record: Property) => (
        <Flex gap="small">
          <Button
            onClick={() => {
              navigate(`/property/${record.id}`);
            }}
            text="View"
          />
          <Button
            onClick={() => handleRemoveProperty(record.id)}
            type="default"
            text="Delete"
          />
        </Flex>
      ),
    },
  ];

  return (
    <Table
      dataSource={properties}
      columns={columns}
      rowKey={(record) => record.id}
      scroll={{ x: true }}
    />
  );
};

export default PropertiesTable;
