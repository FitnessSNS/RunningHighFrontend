/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./css/completeStyles";
import Button from "src/components/Button";
import pollen from "../../assets/pollen.svg";

export default function Complete() {
  return (
    <section css={styles.containerStyle(pollen)}>
      <div>
        <h1>
          운동을 완료하고
          <br />
          리워드 <span>150 포인트</span>가<br />
          지급되었어요!
        </h1>
      </div>
      <div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <th>총 달린 거리</th>
              <th>소비 칼로리</th>
              <th>적립된 포인트</th>
            </tr>
            <tr>
              <td>
                2.05 <span>km</span>
              </td>
              <td>
                305 <span>kcal</span>
              </td>
              <td>
                150<span>포인트</span>
              </td>
            </tr>
          </tbody>
        </table>
        <Button style="gray" size="modal" id="btnRewardDetail">
          적립 내역 자세히 보기
        </Button>
      </div>
      <div>
        <p>
          <Link to="/">공유하기</Link>
        </p>
        <p>
          <Link to="/">메인으로 가기</Link>
        </p>
      </div>
    </section>
  );
}
