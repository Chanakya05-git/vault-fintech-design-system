import { ref } from 'vue';

export function formatCurrency(value: number, currency: string = 'USD', locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

export function convertCurrency(value: number, rate: number): number {
  return value * rate;
}

export function useCurrency() {
  const currency = ref('USD');

  const setCurrency = (newCurrency: string) => {
    currency.value = newCurrency;
  };

  return {
    currency,
    setCurrency,
    formatCurrency,
    convertCurrency,
  };
}