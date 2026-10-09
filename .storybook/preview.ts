import { addParameters } from '@storybook/vue';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
  },
  backgrounds: [
    { name: 'light', value: '#ffffff', default: true },
    { name: 'dark', value: '#333333' },
  ],
});