<template>
  <div class="account-card">
    <h2 class="account-card__title">{{ account.name }}</h2>
    <p class="account-card__balance">{{ formattedBalance }}</p>
    <p class="account-card__account-number">Account Number: {{ account.number }}</p>
    <div class="account-card__actions">
      <button @click="viewDetails" class="btn">View Details</button>
      <button @click="transferFunds" class="btn btn--secondary">Transfer Funds</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCurrency } from '@/composables/useCurrency';
import { Account } from '@/types';

export default defineComponent({
  name: 'AccountCard',
  props: {
    account: {
      type: Object as () => Account,
      required: true,
    },
  },
  setup(props) {
    const { formatCurrency } = useCurrency();

    const formattedBalance = computed(() => formatCurrency(props.account.balance));

    const viewDetails = () => {
      // Logic to view account details
      console.log('Viewing details for:', props.account);
    };

    const transferFunds = () => {
      // Logic to transfer funds
      console.log('Transferring funds from:', props.account);
    };

    return {
      formattedBalance,
      viewDetails,
      transferFunds,
    };
  },
});
</script>

<style scoped>
.account-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  padding: 16px;
  background-color: var(--color-background);
  box-shadow: var(--shadow-small);
}

.account-card__title {
  font-size: var(--font-size-large);
  margin-bottom: 8px;
}

.account-card__balance {
  font-size: var(--font-size-medium);
  color: var(--color-primary);
}

.account-card__account-number {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.account-card__actions {
  margin-top: 16px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: var(--radius-small);
  cursor: pointer;
}

.btn--secondary {
  background-color: var(--color-secondary);
  color: white;
}
</style>