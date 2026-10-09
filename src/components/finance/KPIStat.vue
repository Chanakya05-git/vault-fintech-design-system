<template>
  <div class="kpi-stat">
    <h2 class="kpi-title">{{ title }}</h2>
    <div class="kpi-value">{{ value }}</div>
    <div class="kpi-description">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'KPIStat',
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    value: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
});
</script>

<style scoped>
.kpi-stat {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  padding: var(--spacing-medium);
  background-color: var(--color-background);
  box-shadow: var(--shadow-small);
}

.kpi-title {
  font-size: var(--font-size-large);
  font-weight: bold;
}

.kpi-value {
  font-size: var(--font-size-xlarge);
  color: var(--color-primary);
}

.kpi-description {
  font-size: var(--font-size-medium);
  color: var(--color-text);
}
</style>