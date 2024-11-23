


import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
//@ts-ignore
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";






/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}", "declarations.d.ts"],
    languageOptions: { globals: globals.browser },
    rules: {
      // React Rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off", // Next.js handles React scope automatically

      // React Hooks Rules
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginReactHooks.configs.recommended,

];