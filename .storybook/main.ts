import { defineConfig } from 'storybook-vue3';

export default defineConfig({
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|mjs|cjs|vue)',
    '../src/patterns/**/*.stories.@(js|jsx|ts|tsx|mjs|cjs|vue)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'webpack5',
  },
});