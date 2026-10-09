<template>
  <div class="insight-pill">
    <div class="insight-pill__content">
      <h4 class="insight-pill__title">{{ title }}</h4>
      <p class="insight-pill__description">{{ description }}</p>
    </div>
    <button class="insight-pill__action" @click="onActionClick">{{ actionText }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InsightPill',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    actionText: {
      type: String,
      default: 'View More',
    },
  },
  methods: {
    onActionClick() {
      this.$emit('action-click');
    },
  },
});
</script>

<style scoped>
.insight-pill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  background-color: var(--color-background);
  box-shadow: var(--shadow-small);
}

.insight-pill__content {
  flex: 1;
}

.insight-pill__title {
  font-size: var(--font-size-large);
  font-weight: bold;
}

.insight-pill__description {
  font-size: var(--font-size-medium);
  color: var(--color-text-secondary);
}

.insight-pill__action {
  padding: 8px 16px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-small);
  cursor: pointer;
}

.insight-pill__action:hover {
  background-color: var(--color-primary-dark);
}
</style>