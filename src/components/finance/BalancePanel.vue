<template>
  <div class="balance-panel">
    <h2 class="balance-panel__title">Account Balance</h2>
    <div class="balance-panel__amount">
      <span class="balance-panel__currency">{{ currency }}</span>
      <span class="balance-panel__value">{{ formattedBalance }}</span>
    </div>
    <button @click="refreshBalance" class="balance-panel__refresh-button">Refresh</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCurrency } from '@/composables/useCurrency';

export default defineComponent({
  name: 'BalancePanel',
  props: {
    balance: {
      type: Number,
      required: true,
    },
    currencyCode: {
      type: String,
      default: 'USD',
    },
  },
  setup(props) {
    const { formatCurrency } = useCurrency();

    const formattedBalance = computed(() => {
      return formatCurrency(props.balance, props.currencyCode);
    });

    const currency = computed(() => props.currencyCode);

    const refreshBalance = () => {
      // Logic to refresh the balance can be added here
      console.log('Balance refreshed');
    };

    return {
      formattedBalance,
      currency,
      refreshBalance,
    };
  },
});
</script>

<style scoped>
.balance-panel {
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
}

.balance-panel__title {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.balance-panel__amount {
  font-size: 2rem;
  font-weight: bold;
}

.balance-panel__currency {
  font-size: 1rem;
  margin-right: 4px;
}

.balance-panel__refresh-button {
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.balance-panel__refresh-button:hover {
  background-color: #0056b3;
}
</style>