<template>
  <button
    :class="['btn', variant, size]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'medium',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.btn {
  padding: 0.5em 1em;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: var(--font-size);
}

.btn.primary {
  background-color: var(--color-primary);
  color: white;
}

.btn.secondary {
  background-color: var(--color-secondary);
  color: white;
}

.btn.medium {
  font-size: 1rem;
}

.btn.large {
  font-size: 1.25rem;
}

.btn:disabled {
  background-color: var(--color-disabled);
  cursor: not-allowed;
}
</style>