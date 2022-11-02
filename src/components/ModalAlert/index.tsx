/** @jsxImportSource @emotion/react */
import React from "react";
import Modal from "react-modal";
import Button from "../Button";

import * as styles from "./styles";

type Props = {
  isOpen: boolean;
  title: string;
  description?: string;
  buttonTitle: string;
  onClick?: () => void;
};

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: 295,
    padding: 0,
    transform: "translate(-50%, -50%)",
    border: 0,
    position: "fixed",
    borderRadius: "10px",
  },
};

const ModalAlert = ({
  isOpen,
  title,
  description,
  buttonTitle,
  onClick,
}: Props) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
      <div css={styles.titleBlock}>{title}</div>
      <div css={styles.descriptionBlock}>{description}</div>
      <div css={styles.buttonBlock}>
        <Button onClick={onClick} style="primary" size="modal">
          {buttonTitle}
        </Button>
      </div>
    </Modal>
  );
};

export default React.memo(ModalAlert);
