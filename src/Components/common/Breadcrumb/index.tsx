import { Breadcrumb as AntBreadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "./types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, ...rest }) => {
  return (
    <AntBreadcrumb {...rest}>
      {items.map((item, index) => (
        <AntBreadcrumb.Item key={index}>
          {item.href ? <Link to={item.href}>{item.title}</Link> : item.title}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
