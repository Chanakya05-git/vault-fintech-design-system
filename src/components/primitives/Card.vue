<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
});
</script>

<style scoped>
.card {
  background-color: var(--color-background);
  border-radius: var(--radius-default);
  box-shadow: var(--shadow-default);
  padding: var(--spacing-medium);
  margin: var(--spacing-small);
}
</style>