import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import {
  config as tseslintConfig,
  configs as tslintConfigs,
} from "typescript-eslint";
import eslintConfigPrettierRecommended from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";

export default tseslintConfig(
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended, eslintConfigPrettierRecommended],
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tslintConfigs.recommended,
      ...tailwind.configs["flat/recommended"],
      eslintConfigPrettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "tailwindcss/classnames-order": "error",
    },
  },
);
