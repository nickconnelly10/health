import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

const config = defineConfig([
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**", "dist/**", "next-env.d.ts", "*.config.js", "*.config.cjs", "*.config.mjs"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  nextPlugin.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  {
    rules: {
      "@next/next/no-img-element": "warn",
    },
  },
]);

export default config;
