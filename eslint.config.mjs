import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [".next/**", ".open-next/**", ".wrangler/**", "node_modules/**"],
  },
];

export default eslintConfig;
