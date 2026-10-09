import { computed } from 'vue';

export function cn(...classes: (string | undefined | false)[]) {
  return computed(() => classes.filter(Boolean).join(' '));
}