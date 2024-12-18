import { Table, TableProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PropertyProps } from "../../Pages/PropertyPage/types";
import Button from "../common/Button";

interface Properties {
  properties: PropertyProps[];
}

export const PropertiesTable: React.FC<Properties> = ({ properties }) => {
  const navigate = useNavigate();

  const columns: TableProps<PropertyProps>["columns"] = [
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
      render: (_: unknown, record: PropertyProps) => (
        <Button
          onClick={() => {
            navigate(`/property/${record.id}`);
          }}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={properties}
      columns={columns}
      rowKey={(record) => record.id}
    />
  );
};
