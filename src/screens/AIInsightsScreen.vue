<template>
  <div class="ai-insights-screen">
    <h1>AI Insights</h1>
    <AiAssistantPanel />
    <div class="insights-container">
      <AiSummaryCard />
      <RecommendationList />
      <InsightPill v-for="insight in insights" :key="insight.id" :insight="insight" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AiAssistantPanel from '@/patterns/ai-assistant/AiAssistantPanel.vue';
import AiSummaryCard from '@/patterns/ai-assistant/AiSummaryCard.vue';
import InsightPill from '@/patterns/ai-assistant/InsightPill.vue';
import RecommendationList from '@/patterns/ai-assistant/RecommendationList.vue';
import { useAiInsights } from '@/composables/useAiInsights';

export default defineComponent({
  name: 'AIInsightsScreen',
  components: {
    AiAssistantPanel,
    AiSummaryCard,
    InsightPill,
    RecommendationList,
  },
  setup() {
    const { insights } = useAiInsights();
    return { insights };
  },
});
</script>

<style scoped>
.ai-insights-screen {
  padding: 20px;
}

.insights-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>