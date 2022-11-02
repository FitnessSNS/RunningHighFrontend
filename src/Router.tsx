import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Mypage } from "./pages/Mypage";
import { Main } from "./pages/Main";
import { Rewards } from "./pages/Rewards";
import { Login } from "./pages/Auth/Login";
import { SignupTerms } from "./pages/Auth/Signup/SignupTerms";
import { SignupEmail } from "./pages/Auth/Signup/SignupEmail";
import { SignupPassword } from "./pages/Auth/Signup/SignupPassword";
import { SignupNickname } from "./pages/Auth/Signup/SignupNickname";
import { SignupEnd } from "./pages/Auth/Signup/SignupEnd";
import { SocialNickname } from "./pages/Auth/Social/Nickname";
import { FindPassword } from "./pages/Auth/FindPassword";
import { MyInfo } from "./pages/Mypage/MyInfo";
import { MyCoupon } from "./pages/Mypage/MyCoupon";
import { Test } from "./pages/test";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/reward" element={<Rewards />} />
          <Route path="/mypage" element={<Mypage />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* <Route path="/challenge" element={<Challenge />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<SignupTerms />} />
        <Route path="/socialnickname" element={<SocialNickname />} />
        <Route path="/signupemail" element={<SignupEmail />} />
        <Route path="/signuppwd" element={<SignupPassword />} />
        <Route path="/signupnick" element={<SignupNickname />} />
        <Route path="/signupend" element={<SignupEnd />} />
        <Route path="/findpwd" element={<FindPassword />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/mycoupon" element={<MyCoupon />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
