import { Breadcrumb as AntBreadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "./types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const breadcrumbItems = items.map((item) => ({
    title: item.href ? <Link to={item.href}>{item.title}</Link> : item.title,
  }));

  return <AntBreadcrumb items={breadcrumbItems} />;
};

export default Breadcrumb;
