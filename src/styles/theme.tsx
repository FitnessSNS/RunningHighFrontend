import { ThemePropsType } from "@emotion/react";

export const theme: ThemePropsType = {
  color: {
    main: {
      primary: "#00BF68",
      positive: "#0DD97C",
      negative: "#00A057",
    },
    error: "#FF6464",
    disabled: "#DDDDDD",
    kakao: "#F8EB00",
    line: "#E9E9E9",
    white: "#FFFFFF",
    gray: {
      50: "#F5F5F8",
      100: "#F0F0F3",
      200: "#E9E9E9",
      300: "#DDDDDD",
      500: "#888888",
      700: "#666666",
      800: "#333333",
    },
  },
  gradient: {
    main: "linear-gradient(233.11deg, #21C97C 10.65%, #87E985 88.69%),linear-gradient(63.34deg, #B4D6FF -1.11%, #C275FF 48.67%, #00DE79 92.59%);",
    running:
      "linear-gradient(65.06deg, #D9FF9C 9.68%, #87E985 46.87%, #24CA7C 88.77%);",
  },
  fontStyle: function (
    family = "Pretendard-Regular",
    style = "normal",
    weight = "400",
    size = "16px",
    lineHeight = "normal"
  ) {
    return `
        font-family: ${family};
        font-style: ${style};
        font-weight: ${weight};
        font-size: ${size};
        line-height: ${lineHeight};
    `;
  },
  flexBox: function (direction = "row", align = "stretch", justify = "center") {
    return `
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
  `;
  },
  positionCenterX: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
        position: ${type};
        left: 50%;
        transform: translateX(-50%);
        `;
    return;
  },
  positionCenterY: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
      position: ${type};
      top: 50%;
      transform: translateY(-50%);
    `;
    return;
  },
  positionCenter: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
  positionLeftTop: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
      position: ${type};
      left: 0;
      top: 0;
      `;
    return;
  },
  positionRightTop: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
      position: ${type};
      right: 0;
      top: 0;
      `;
    return;
  },
  positionLeftBottom: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
      position: ${type};
      left: 0;
      bottom: 0;
      `;
    return;
  },
  positionRightBottom: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
      position: ${type};
      right: 0;
      bottom: 0;
      `;
    return;
  },
  positionAll: function (type = "absolute") {
    if (type === "absolute" || type === "relative")
      return `
      position: ${type};
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      `;
    return;
  },
};
