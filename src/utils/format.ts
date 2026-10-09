import { formatCurrency } from './currency';

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-US').format(new Date(date));
};

export const formatAccountBalance = (balance: number): string => {
  return formatCurrency(balance);
};