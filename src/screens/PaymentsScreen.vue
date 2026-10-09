<template>
  <div class="payments-screen">
    <h1 class="title">Payments</h1>
    <div class="payment-form">
      <Input v-model="amount" placeholder="Enter amount" />
      <Select v-model="selectedAccount" :options="accounts" placeholder="Select account" />
      <Button @click="submitPayment">Submit Payment</Button>
    </div>
    <TransactionList :transactions="transactions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Input from '@/components/primitives/Input.vue';
import Select from '@/components/primitives/Select.vue';
import Button from '@/components/primitives/Button.vue';
import TransactionList from '@/components/finance/TransactionList.vue';
import { mockTransactions } from '@/data/mockTransactions';
import { mockAccounts } from '@/data/mockAccounts';

export default defineComponent({
  components: {
    Input,
    Select,
    Button,
    TransactionList,
  },
  setup() {
    const amount = ref('');
    const selectedAccount = ref(null);
    const transactions = ref(mockTransactions);
    const accounts = ref(mockAccounts);

    const submitPayment = () => {
      // Logic to handle payment submission
      console.log(`Payment of ${amount.value} submitted from account ${selectedAccount.value}`);
    };

    return {
      amount,
      selectedAccount,
      transactions,
      accounts,
      submitPayment,
    };
  },
});
</script>

<style scoped>
.payments-screen {
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.payment-form {
  margin-bottom: 20px;
}
</style>