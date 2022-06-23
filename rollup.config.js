
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js", // your entry point
    output: {
      name: "color-convert", // package name
      file: pkg.browser,
      format: "umd",
      exports: 'default'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
  {
    input: "src/index.js", // your entry point
    output: [
      { file: pkg.main, format: "cjs", exports: "default" },
      { file: pkg.module, format: "es", exports: "default" },
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
];