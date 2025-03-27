import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
js.configs.recommended,
{
languageOptions: {
parser: tsParser,
sourceType: "module"
},
plugins: {
"@typescript-eslint": ts,
"@angular-eslint": angular,
"@angular-eslint/template": angularTemplate,
prettier: prettierPlugin,
import: importPlugin
},
rules: {
"no-unused-vars": "error",
"@typescript-eslint/no-unused-vars": ["error"],
"@angular-eslint/no-empty-lifecycle-method": "warn",
"@angular-eslint/component-class-suffix": ["error", { suffixes: ["Component"] }],
"prettier/prettier": "error",
"import/order": ["error", { "alphabetize": { "order": "asc" } }]
}
},
prettier
];
