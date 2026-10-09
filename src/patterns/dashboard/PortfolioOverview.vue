<template>
  <div class="portfolio-overview">
    <h2 class="portfolio-overview__title">Portfolio Overview</h2>
    <div class="portfolio-overview__content">
      <div class="portfolio-overview__summary">
        <p>Total Value: {{ totalValue }}</p>
        <p>Change: {{ changePercentage }}%</p>
      </div>
      <div class="portfolio-overview__details">
        <h3>Assets</h3>
        <ul>
          <li v-for="asset in assets" :key="asset.id">
            {{ asset.name }}: {{ asset.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortfolioOverview',
  data() {
    return {
      totalValue: 0,
      changePercentage: 0,
      assets: [
        { id: 1, name: 'Asset 1', value: 1000 },
        { id: 2, name: 'Asset 2', value: 2000 },
        { id: 3, name: 'Asset 3', value: 1500 },
      ],
    };
  },
  mounted() {
    this.calculateTotalValue();
    this.calculateChangePercentage();
  },
  methods: {
    calculateTotalValue() {
      this.totalValue = this.assets.reduce((sum, asset) => sum + asset.value, 0);
    },
    calculateChangePercentage() {
      // Placeholder for change calculation logic
      this.changePercentage = ((this.totalValue - 2500) / 2500) * 100; // Example calculation
    },
  },
});
</script>

<style scoped>
.portfolio-overview {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.portfolio-overview__title {
  font-size: 24px;
  margin-bottom: 16px;
}

.portfolio-overview__content {
  display: flex;
  flex-direction: column;
}

.portfolio-overview__summary {
  margin-bottom: 16px;
}

.portfolio-overview__details {
  margin-top: 16px;
}
</style>