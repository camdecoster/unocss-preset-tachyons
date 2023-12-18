import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index",
    "src/rules",
  ],
  clean: true,
  declaration: true,
  externals: ["@unocss/core"],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    },
    inlineDependencies: true,
  },
});