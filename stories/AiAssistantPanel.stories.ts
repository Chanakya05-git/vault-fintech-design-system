import AiAssistantPanel from '../src/patterns/ai-assistant/AiAssistantPanel.vue';

export default {
  title: 'AI Assistant Panel',
  component: AiAssistantPanel,
};

const Template = (args) => ({
  components: { AiAssistantPanel },
  setup() {
    return { args };
  },
  template: '<AiAssistantPanel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Add default props for the AiAssistantPanel component here
};

export const WithInsights = Template.bind({});
WithInsights.args = {
  // Add props to simulate insights for the AiAssistantPanel component here
};