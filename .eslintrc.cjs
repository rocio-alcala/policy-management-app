module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "func-style": ["error", "declaration", { allowArrowFunctions: false }],
    "spaced-comment": ["error", "always"],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: false,
      },
    ],
  },
};
