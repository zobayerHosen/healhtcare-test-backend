
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
    files: ['**/*.{js,ts}'],
    extends: [
        js.configs.recommended,
        tseslint.configs.recommended
    ],
});
