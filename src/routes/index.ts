import { createRouter, createWebHistory } from 'vue-router';
import DashboardScreen from '../screens/DashboardScreen.vue';
import PaymentsScreen from '../screens/PaymentsScreen.vue';
import RiskScreen from '../screens/RiskScreen.vue';
import AIInsightsScreen from '../screens/AIInsightsScreen.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardScreen,
  },
  {
    path: '/payments',
    name: 'Payments',
    component: PaymentsScreen,
  },
  {
    path: '/risk',
    name: 'Risk',
    component: RiskScreen,
  },
  {
    path: '/ai-insights',
    name: 'AIInsights',
    component: AIInsightsScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;