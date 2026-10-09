<template>
  <span :class="badgeClasses" v-if="visible">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Badge',
  props: {
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'medium',
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const badgeClasses = computed(() => {
      return [
        'badge',
        `badge--${props.color}`,
        `badge--${props.size}`,
      ];
    });

    return {
      badgeClasses,
    };
  },
});
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: var(--radius-small);
  font-size: var(--font-size-small);
  color: white;
}

.badge--default {
  background-color: var(--color-gray);
}

.badge--success {
  background-color: var(--color-green);
}

.badge--error {
  background-color: var(--color-red);
}

.badge--warning {
  background-color: var(--color-yellow);
}

.badge--medium {
  font-size: var(--font-size-medium);
}

.badge--large {
  font-size: var(--font-size-large);
}
</style>