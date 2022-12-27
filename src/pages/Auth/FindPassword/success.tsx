/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ModalAlert from "src/components/ModalAlert";

export const Success = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <>
      <ModalAlert
        isOpen={modal}
        title={"이메일로 임시 비밀번호가 \n발급되었어요."}
        size="modal"
        description="마이페이지에서 비밀번호 변경이 가능해요."
        buttonConfirmTitle="로그인하기"
        onConfirm={() => {
          setModal(!modal);
          navigate("/login");
        }}
      />
    </>
  );
};
