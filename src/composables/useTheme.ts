import { ref } from 'vue';

export function useTheme() {
  const currentTheme = ref('light');

  const setTheme = (theme) => {
    currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return {
    currentTheme,
    setTheme,
    toggleTheme,
  };
}