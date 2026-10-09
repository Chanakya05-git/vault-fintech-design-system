<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)"
      :class="['input', { 'input--error': error }]"/>
    <span v-if="error" class="input-error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String as PropType<'text' | 'password' | 'email'>,
      default: 'text',
    },
    error: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
}

.input-label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input--error {
  border-color: red;
}

.input-error {
  color: red;
  margin-top: 0.25rem;
}
</style>