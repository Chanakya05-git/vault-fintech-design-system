<template>
  <div class="portfolio-summary">
    <h2 class="portfolio-summary__title">Portfolio Summary</h2>
    <div class="portfolio-summary__content">
      <div class="portfolio-summary__item">
        <span class="portfolio-summary__label">Total Value:</span>
        <span class="portfolio-summary__value">{{ totalValue }}</span>
      </div>
      <div class="portfolio-summary__item">
        <span class="portfolio-summary__label">Total Gain/Loss:</span>
        <span class="portfolio-summary__value" :class="{ 'positive': totalGainLoss >= 0, 'negative': totalGainLoss < 0 }">
          {{ totalGainLoss }}
        </span>
      </div>
      <div class="portfolio-summary__item">
        <span class="portfolio-summary__label">Invested Amount:</span>
        <span class="portfolio-summary__value">{{ investedAmount }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortfolioSummary',
  props: {
    totalValue: {
      type: Number,
      required: true,
    },
    totalGainLoss: {
      type: Number,
      required: true,
    },
    investedAmount: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.portfolio-summary {
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  background-color: var(--color-background);
}

.portfolio-summary__title {
  font-size: var(--font-size-large);
  margin-bottom: 12px;
}

.portfolio-summary__content {
  display: flex;
  flex-direction: column;
}

.portfolio-summary__item {
  margin-bottom: 8px;
}

.portfolio-summary__label {
  font-weight: bold;
}

.portfolio-summary__value {
  margin-left: 8px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>