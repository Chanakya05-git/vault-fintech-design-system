import { ref } from 'vue';

export function useCurrency() {
  const currencyFormat = (amount: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const convertCurrency = (amount: number, rate: number): number => {
    return amount * rate;
  };

  return {
    currencyFormat,
    convertCurrency,
  };
}