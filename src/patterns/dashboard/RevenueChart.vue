<template>
  <div class="revenue-chart">
    <h2 class="chart-title">Revenue Chart</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'RevenueChart',
  setup() {
    const chartCanvas = ref<HTMLCanvasElement | null>(null);

    const renderChart = () => {
      if (chartCanvas.value) {
        const ctx = chartCanvas.value.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Revenue',
                  data: [4000, 4500, 3000, 5000, 6000, 7000, 8000],
                  borderColor: '#42A5F5',
                  backgroundColor: 'rgba(66, 165, 245, 0.2)',
                  fill: true,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      }
    };

    onMounted(() => {
      renderChart();
    });

    return {
      chartCanvas,
    };
  },
});
</script>

<style scoped>
.revenue-chart {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.chart-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>