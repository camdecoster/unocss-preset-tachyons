import type { Rule } from "@unocss/core";

export const backgroundPosition: Rule[] = [
  [/^bg-(center|top|right|bottom|left)$/, ([_, type]) => {
    const value = { x: "center", y: "center" };
    switch (type) {
      case "bottom":
        value.y = "bottom";
        break;
      case "left":
        value.x = "left";
        break;
      case "right":
        value.x = "right";
        break;
      case "top":
        value.y = "top";
        break;
    }

    return {
      "background-repeat": "no-repeat",
      "background-position": Object.values(value).join(" "),
    };
  }],
];