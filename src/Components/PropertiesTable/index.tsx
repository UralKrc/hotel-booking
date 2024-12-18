import { Table } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";

interface Property {
  name: string;
  id: string;
}

interface Properties {
  properties: Property[];
}

export const PropertiesTable: React.FC<Properties> = ({ properties }) => {
  const navigate = useNavigate();

  const columns = [
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

  return <Table dataSource={properties} columns={columns} />;
};
