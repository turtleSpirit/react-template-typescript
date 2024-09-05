import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {
    languageOptions: { 
      globals: globals.browser,
      parser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 启用 JSX 语法支持
        },
      },
    }
  },
  {
    plugins:{
      '@typesctipt-eslint':typescriptEslint,
      'react': pluginReact,
      'prettier': prettierPlugin
    }
  },
  {
    rules:{
      // 开启 Prettier，并将其作为 ESLint 错误
      'prettier/prettier': 'error',
      // 其他 TypeScript 相关规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // React 相关规则
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',  // React 17+ 不需要引入 React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // 可以根据你的项目需求添加其他 ESLint 规则
    },
    // extends: [
    //   'eslint:recommended',
    //   'plugin:@typescript-eslint/recommended', // TypeScript 推荐配置
    //   'plugin:react/recommended',              // React 推荐配置
    //   'plugin:prettier/recommended',           // Prettier 推荐配置，确保在最后
    // ],
    settings: {
      react: {
        version: 'detect', // 自动检测 React 版本
      },
    },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];