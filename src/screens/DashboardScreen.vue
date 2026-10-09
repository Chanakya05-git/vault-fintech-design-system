<template>
  <div class="dashboard-screen">
    <AppShell>
      <Sidebar />
      <Topbar />
      <main>
        <h1>Dashboard</h1>
        <PortfolioOverview />
        <RevenueChart />
        <WatchlistTable />
      </main>
    </AppShell>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppShell from '@/layouts/AppShell.vue';
import Sidebar from '@/layouts/Sidebar.vue';
import Topbar from '@/layouts/Topbar.vue';
import PortfolioOverview from '@/patterns/dashboard/PortfolioOverview.vue';
import RevenueChart from '@/patterns/dashboard/RevenueChart.vue';
import WatchlistTable from '@/patterns/dashboard/WatchlistTable.vue';

export default defineComponent({
  name: 'DashboardScreen',
  components: {
    AppShell,
    Sidebar,
    Topbar,
    PortfolioOverview,
    RevenueChart,
    WatchlistTable,
  },
});
</script>

<style scoped>
.dashboard-screen {
  padding: 20px;
}
</style>