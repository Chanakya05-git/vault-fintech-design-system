<template>
  <div class="select-container">
    <label v-if="label" :for="id" class="select-label">{{ label }}</label>
    <select :id="id" v-model="selectedValue" @change="handleChange" class="select-input">
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Select',
  props: {
    options: {
      type: Array as PropType<Array<{ label: string; value: string | number }>>,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: String,
      default: 'select-input',
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    handleChange() {
      this.$emit('change', this.selectedValue);
    },
  },
});
</script>

<style scoped>
.select-container {
  display: flex;
  flex-direction: column;
}

.select-label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.select-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
</style>