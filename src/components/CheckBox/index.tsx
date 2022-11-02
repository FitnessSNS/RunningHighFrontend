/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useState } from "react";

import * as styles from "./styles";
import check from "src/assets/check.svg";
import uncheck from "src/assets/uncheck.svg";

export type CheckBoxType = "all" | "basic";

type Props = {
  type?: CheckBoxType;
  label: string;
  id: string;
  name?: string;
  onChange?: (e: any) => void;
  [key: string]: any;
};

const CheckBox = (
  { type = "basic", label = "", id = "", name = "", onChange, ...args }: Props,
  inputRef: any
) => {
  const [state, setState] = useState<boolean>(false);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setState(checked);
    onChange && onChange({ name, checked });
  };
  return (
    <div css={[styles.checkbox, styles.type(type)]}>
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={changeHandler}
        checked={state}
        ref={inputRef}
        {...args}
      />
      <label htmlFor={id}>
        <img src={state ? check : uncheck} alt="체크박스" />
      </label>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default React.forwardRef(CheckBox);
