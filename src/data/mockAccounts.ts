export const mockAccounts = [
  {
    id: '1',
    accountName: 'Savings Account',
    balance: 15000.00,
    currency: 'USD',
    accountType: 'savings',
    transactions: [
      { id: 't1', amount: 500.00, date: '2023-10-01', description: 'Deposit' },
      { id: 't2', amount: -200.00, date: '2023-10-05', description: 'Withdrawal' },
    ],
  },
  {
    id: '2',
    accountName: 'Checking Account',
    balance: 3200.50,
    currency: 'USD',
    accountType: 'checking',
    transactions: [
      { id: 't3', amount: 1200.00, date: '2023-10-02', description: 'Deposit' },
      { id: 't4', amount: -300.00, date: '2023-10-06', description: 'Payment' },
    ],
  },
  {
    id: '3',
    accountName: 'Investment Account',
    balance: 25000.75,
    currency: 'USD',
    accountType: 'investment',
    transactions: [
      { id: 't5', amount: 1000.00, date: '2023-10-03', description: 'Deposit' },
      { id: 't6', amount: -1500.00, date: '2023-10-07', description: 'Withdrawal' },
    ],
  },
];