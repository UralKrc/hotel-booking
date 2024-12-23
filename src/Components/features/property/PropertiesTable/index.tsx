import { Table, TableProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Property } from "../../../../Types/types";
import Button from "../../../common/Button";
import { PropertiesTableProps } from "./types";

const PropertiesTable: React.FC<PropertiesTableProps> = ({ properties }) => {
  const navigate = useNavigate();

  const columns: TableProps<Property>["columns"] = [
    {
      title: "Id",
      dataIndex: ["property", "id"],
    },
    {
      title: "Name",
      dataIndex: ["property", "name"],
    },
    {
      title: "Actions",
      render: (_: unknown, record: Property) => (
        <Button
          onClick={() => {
            navigate(`/property/${record.property.id}`);
          }}
          text="View"
        />
      ),
    },
  ];

  return (
    <Table
      dataSource={properties}
      columns={columns}
      rowKey={(record) => record.property.id}
      scroll={{ x: true }}
    />
  );
};

export default PropertiesTable;
