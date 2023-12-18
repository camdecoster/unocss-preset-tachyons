import type { Rule } from "@unocss/core";

export const borders: Rule[] = [
  [/^b(a|t|r|b|l|n)$/,([_, prop]) => {
    let style = "solid";
    let dir = "";
    let width = "1px";

    if (prop === "t") dir = "top";
    else if (prop === "r") dir = "right";
    else if (prop === "b") dir = "bottom";
    else if (prop === "l") dir = "left";
    else if (prop === "n") {
      style = "none";
      width = "0";
    }

    return {
      [`border-${dir ? dir + "-" : ""}style`]: style,
      [`border-${dir ? dir + "-" : ""}width`]: width,
    };
  }],
];