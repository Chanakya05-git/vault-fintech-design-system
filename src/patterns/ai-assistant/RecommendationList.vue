<template>
  <div class="recommendation-list">
    <h2 class="recommendation-list__title">AI Recommendations</h2>
    <ul class="recommendation-list__items">
      <li v-for="(recommendation, index) in recommendations" :key="index" class="recommendation-list__item">
        <div class="recommendation-list__item-content">
          <h3 class="recommendation-list__item-title">{{ recommendation.title }}</h3>
          <p class="recommendation-list__item-description">{{ recommendation.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RecommendationList',
  props: {
    recommendations: {
      type: Array as () => Array<{ title: string; description: string }>,
      required: true,
    },
  },
});
</script>

<style scoped>
.recommendation-list {
  padding: 16px;
  background-color: var(--color-background);
}

.recommendation-list__title {
  font-size: var(--font-size-large);
  margin-bottom: 12px;
}

.recommendation-list__items {
  list-style-type: none;
  padding: 0;
}

.recommendation-list__item {
  margin-bottom: 8px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  background-color: var(--color-white);
}

.recommendation-list__item-title {
  font-weight: bold;
}

.recommendation-list__item-description {
  color: var(--color-text-secondary);
}
</style>