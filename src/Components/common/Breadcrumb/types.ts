import { BreadcrumbProps as AntBreadcrumbProps } from "antd/lib/breadcrumb";
interface BreadcrumbItem {
  title: string;
  href?: string;
}

export interface BreadcrumbProps extends AntBreadcrumbProps {
  items: BreadcrumbItem[];
}
