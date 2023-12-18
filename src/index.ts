import { definePreset } from "@unocss/core";
import { rules } from "./rules";

export { rules };

// export interface PresetWindOptions extends PresetMiniOptions { }

// export const presetTachyons = definePreset((options: PresetWindOptions = {}) => {
export const presetTachyons = definePreset(() => {
  return {
    // ...presetMini(options),
    name: "unocss-preset-tachyons",
    // theme,
    rules,
    // shortcuts: [],
    // variants: [],
  };
});

export default presetTachyons;