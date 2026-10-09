import { ref } from 'vue';

export function useAiInsights() {
  const insights = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchInsights = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/ai-insights'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch insights');
      }
      insights.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    insights,
    loading,
    error,
    fetchInsights,
  };
}