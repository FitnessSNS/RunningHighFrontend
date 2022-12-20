/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./css/completeStyles";
import Button from "src/components/Button";
import pollen from "src/assets/pollen.svg";
import rewardResult from "src/assets/rewardResult.svg";

export const Complete = () => {
  return (
    <>
      <img src={pollen} alt="pollen" css={styles.pollenImgStyles} />
      <section css={styles.containerStyle}>
        <div css={styles.titleStyle}>
          <img src={rewardResult} alt="rewardResult" />
          <h1>
            운동을 완료하고
            <br />
            리워드 <span>150 포인트</span>가<br />
            지급되었어요!
          </h1>
        </div>
        <div css={styles.tableWrapperStyle}>
          <table css={styles.runningTableStyle}>
            <thead></thead>
            <tbody>
              <tr>
                <th>총 달린 거리</th>
                <td>
                  <span>2.05</span> km
                </td>
              </tr>
              <tr>
                <th>소비 칼로리</th>
                <td>
                  <span>305</span> kcal
                </td>
              </tr>
              <tr>
                <th>적립된 포인트</th>
                <td>
                  <span>150</span> 포인트
                </td>
              </tr>
            </tbody>
          </table>
          <Button style="gray" size="modal" id="btnRewardDetail">
            적립 내역 자세히 보기
          </Button>
        </div>
        <div css={styles.linkStyle}>
          <p>
            <Link to="/">공유하기</Link>
          </p>
          <p>
            <Link to="/">메인으로 가기</Link>
          </p>
        </div>
      </section>
    </>
  );
};
