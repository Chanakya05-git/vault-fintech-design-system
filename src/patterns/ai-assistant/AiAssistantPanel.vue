<template>
  <div class="ai-assistant-panel">
    <h2 class="panel-title">AI Assistant</h2>
    <div class="insight-list">
      <InsightPill v-for="insight in insights" :key="insight.id" :insight="insight" />
    </div>
    <RecommendationList :recommendations="recommendations" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InsightPill from './InsightPill.vue';
import RecommendationList from './RecommendationList.vue';
import { useAiInsights } from '@/composables/useAiInsights';

export default defineComponent({
  name: 'AiAssistantPanel',
  components: {
    InsightPill,
    RecommendationList,
  },
  setup() {
    const { insights, recommendations } = useAiInsights();
    return { insights, recommendations };
  },
});
</script>

<style scoped>
.ai-assistant-panel {
  padding: 16px;
  background-color: var(--color-background);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-elevation);
}

.panel-title {
  font-size: var(--font-size-large);
  margin-bottom: 12px;
}

.insight-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>