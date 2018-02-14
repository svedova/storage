import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "bundle.js", 
    format: "cjs",
    name: "storage",
    sourcemap: true
  },
  plugins: [babel({ exclude: "node_modules/**" })]
}
