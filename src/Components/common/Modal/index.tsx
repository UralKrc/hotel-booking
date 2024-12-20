import { Modal as AntdModal, ModalProps } from "antd";
import React from "react";

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onOk,
  onCancel,
  width,
  title = "Basic Modal",
}) => {
  return (
    // Gives error findDOMNode is deprecated in StrictMode
    // https://github.com/ant-design/ant-design/issues/27921
    <AntdModal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
