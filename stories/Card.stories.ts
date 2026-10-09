import Card from '../src/components/primitives/Card.vue';

export default {
  title: 'Primitives/Card',
  component: Card,
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is a sample card content.',
  footer: 'Footer content',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  content: 'This card includes an image.',
  image: 'https://via.placeholder.com/150',
  footer: 'Footer content',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  content: 'This card has action buttons.',
  actions: [
    { text: 'Action 1', onClick: () => alert('Action 1 clicked') },
    { text: 'Action 2', onClick: () => alert('Action 2 clicked') },
  ],
};