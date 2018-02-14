import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "bundle.js", 
    format: "iife",
    name: "storage",
    sourcemap: true
  },
  plugins: [babel({ exclude: "node_modules/**" })]
}
