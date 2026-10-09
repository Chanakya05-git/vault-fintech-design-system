<template>
  <div class="ai-summary-card">
    <h3 class="ai-summary-card__title">{{ title }}</h3>
    <p class="ai-summary-card__description">{{ description }}</p>
    <div class="ai-summary-card__insights">
      <ul>
        <li v-for="(insight, index) in insights" :key="index" class="ai-summary-card__insight">
          {{ insight }}
        </li>
      </ul>
    </div>
    <button @click="onActionClick" class="ai-summary-card__action-button">
      {{ actionText }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'AiSummaryCard',
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
    insights: {
      type: Array as PropType<string[]>,
      required: true,
    },
    actionText: {
      type: String as PropType<string>,
      default: 'Learn More',
    },
    onActionClick: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
});
</script>

<style scoped>
.ai-summary-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-medium);
  padding: var(--spacing-medium);
  background-color: var(--color-background);
  box-shadow: var(--shadow-small);
}

.ai-summary-card__title {
  font-size: var(--font-size-large);
  font-weight: bold;
}

.ai-summary-card__description {
  font-size: var(--font-size-medium);
  margin: var(--spacing-small) 0;
}

.ai-summary-card__insights {
  margin: var(--spacing-small) 0;
}

.ai-summary-card__insight {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.ai-summary-card__action-button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: var(--spacing-small) var(--spacing-medium);
  border-radius: var(--radius-small);
  cursor: pointer;
}
</style>