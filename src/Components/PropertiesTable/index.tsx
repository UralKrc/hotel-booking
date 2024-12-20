import { Flex, Table, TableProps } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProperty } from "../../Store/property/actions";
import { Property } from "../../Store/types";
import Button from "../common/Button";

interface Properties {
  properties: Property[];
}

export const PropertiesTable: React.FC<Properties> = ({ properties }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveProperty = (id: string) => {
    dispatch(removeProperty(id));
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
