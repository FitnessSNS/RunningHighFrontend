/** @jsxImportSource @emotion/react */
import React, { ChangeEvent } from "react";
import * as styles from "./styles";

type Props = {
  type?: "text" | "password" | "number" | "email";
  name?: string;
  value?: string;
  onChange?: (e: any) => void;
  [key: string]: any;
};

const Input = (
  { type = "text", name = "", value = "", onChange, ...args }: Props,
  inputRef: any
) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange && onChange({ name, value });
  };
  return (
    <input
      css={styles.input}
      type={type}
      name={name}
      defaultValue={value}
      onChange={changeHandler}
      ref={inputRef}
      {...args}
    />
  );
};

export default React.forwardRef(Input);
