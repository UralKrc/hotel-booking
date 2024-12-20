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
