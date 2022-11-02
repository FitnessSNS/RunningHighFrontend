/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeProcess } from "src/recuders/rewards";
import { Record } from "src/utils/Record";
import Button from "src/components/Button";
import * as styles from "./css/photoStyles";
import camera from "../../assets/camera.svg";
import frame from "../../assets/frame.svg";
import refresh from "../../assets/icon/ico_refresh.svg";

export default function Photo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    Record();
    //필요시 formdata로 사진을 보내주면 백엔드에서 저장한다
  }, []);

  return (
    <div css={styles.photoStyle} className="photobox">
      <h1 css={styles.titleStyle}>사진으로 인증하기</h1>
      <div css={styles.thumbsStyle(frame)} className="frame"></div>
      <div id="cam">
        <video id="video"></video>
      </div>
      <canvas id="canvas"></canvas>
      <div className="output">
        <img id="photo" alt="" />
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
            dispatch(changeProcess("complete"));
          }}
        >
          이 사진으로 리워드 적립하기
        </Button>
      </div>
    </div>
  );
}
