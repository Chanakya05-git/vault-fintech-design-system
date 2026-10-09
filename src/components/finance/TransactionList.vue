<template>
  <div class="transaction-list">
    <h2 class="transaction-list__title">Transaction History</h2>
    <ul class="transaction-list__items">
      <li v-for="transaction in transactions" :key="transaction.id" class="transaction-list__item">
        <div class="transaction-list__item-details">
          <span class="transaction-list__item-date">{{ transaction.date }}</span>
          <span class="transaction-list__item-description">{{ transaction.description }}</span>
        </div>
        <span class="transaction-list__item-amount" :class="{'transaction-list__item-amount--negative': transaction.amount < 0}">
          {{ formatCurrency(transaction.amount) }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCurrency } from '@/composables/useCurrency';
import { Transaction } from '@/types';

export default defineComponent({
  name: 'TransactionList',
  props: {
    transactions: {
      type: Array as () => Transaction[],
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
.transaction-list {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.transaction-list__title {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.transaction-list__items {
  list-style: none;
  padding: 0;
}

.transaction-list__item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.transaction-list__item:last-child {
  border-bottom: none;
}

.transaction-list__item-details {
  display: flex;
  flex-direction: column;
}

.transaction-list__item-date {
  font-size: 0.875rem;
  color: #666;
}

.transaction-list__item-description {
  font-size: 1rem;
}

.transaction-list__item-amount {
  font-weight: bold;
}

.transaction-list__item-amount--negative {
  color: red;
}
</style>