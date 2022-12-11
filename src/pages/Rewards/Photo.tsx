/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeProcess } from "src/reducers/process";
import { Record } from "src/pages/Rewards/utils/Record";
import Button from "src/components/Button";
import * as styles from "./css/photoStyles";
import camera from "src/assets/camera.svg";
import frameTopLeft from "src/assets/frame_top_left.svg";
import frameTopRight from "src/assets/frame_top_right.svg";
import frameBottomLeft from "src/assets/frame_bottom_left.svg";
import frameBottomRight from "src/assets/frame_bottom_right.svg";
import refresh from "src/assets/icon/ico_refresh.svg";
import axios from "axios";
import ModalAlert from "src/components/ModalAlert";
import { RootState } from "src/app/store";

export const Photo = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const check = useSelector((state: RootState) => state.rewards.check);

  useEffect(() => {
    Record();
  }, []);

  const uploadPhoto = async () => {
    const photo = document.getElementById("photo");
    const imgUrl = photo?.getAttribute("src");
    try {
      const response = await axios.post(
        "/reward/running/proofImage",
        { image: imgUrl, exercise_id: check.exercise_id },
        {
          headers: {
            withCredentials: true,
            contentType: "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error(err);
      <ModalAlert
        isOpen={modal}
        title="사진 인증이 정상적으로\n진행되지 않았어요!"
        size="modal"
        buttonConfirmTitle="확인"
        onConfirm={() => setModal(!modal)}
      />;
    }
  };

  return (
    <div css={styles.photoStyle} className="photobox">
      <h1 css={styles.titleStyle}>사진으로 인증하기</h1>
      <div css={styles.thumbsStyle}>
        <img src={frameTopLeft} alt="frame_top_left" className="frameTopLeft" />
        <img
          src={frameBottomLeft}
          alt="frame_bottom_left"
          className="frameBottomLeft"
        />
        <img
          src={frameTopRight}
          alt="frame_top_right"
          className="frameTopRight"
        />
        <img
          src={frameBottomRight}
          alt="frame_bottom_right"
          className="frameBottomRight"
        />
      </div>
      <div id="cam">
        <video id="video"></video>
      </div>
      <canvas id="canvas"></canvas>
      <div className="output">
        <img id="photo" alt="upload" />
      </div>
      <Button style="white" size="large" id="btnPhoto">
        <img src={camera} alt="camera" id="icoPhoto" />
        사진찍기
      </Button>
      <div className="afterPhoto" css={styles.afterPhotoStyle}>
        <Button
          style="white"
          size="large"
          id="btnRefresh"
          onClick={() => navigate(0)}
        >
          <img src={refresh} alt="refresh" />
        </Button>
        <Button
          style="white"
          size="large"
          id="btnGetReward"
          onClick={() => {
            // uploadPhoto();
            dispatch(changeProcess("complete"));
          }}
        >
          이 사진으로 리워드 적립하기
        </Button>
      </div>
    </div>
  );
};
