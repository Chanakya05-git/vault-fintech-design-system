<template>
  <div class="watchlist-table">
    <h2 class="watchlist-title">Watchlist</h2>
    <table>
      <thead>
        <tr>
          <th>Asset</th>
          <th>Price</th>
          <th>Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in watchlist" :key="item.id">
          <td>{{ item.asset }}</td>
          <td>{{ formatCurrency(item.price) }}</td>
          <td :class="{'positive-change': item.change > 0, 'negative-change': item.change < 0}">
            {{ item.change }}%
          </td>
          <td>{{ formatCurrency(item.marketCap) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCurrency } from '@/composables/useCurrency';

export default defineComponent({
  name: 'WatchlistTable',
  props: {
    watchlist: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { formatCurrency } = useCurrency();

    return {
      formatCurrency,
    };
  },
});
</script>

<style scoped>
.watchlist-table {
  width: 100%;
  border-collapse: collapse;
}

.watchlist-title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

table {
  width: 100%;
  border: 1px solid #ccc;
}

th, td {
  padding: 0.5rem;
  text-align: left;
}

.positive-change {
  color: green;
}

.negative-change {
  color: red;
}
</style>