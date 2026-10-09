<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img src="@/assets/logo.svg" alt="Logo" />
    </div>
    <nav class="sidebar__navigation">
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/payments">Payments</router-link></li>
        <li><router-link to="/risk">Risk Assessment</router-link></li>
        <li><router-link to="/ai-insights">AI Insights</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
});
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--color-background);
  padding: 20px;
  box-shadow: var(--shadow-elevation);
}

.sidebar__logo {
  text-align: center;
  margin-bottom: 20px;
}

.sidebar__navigation ul {
  list-style: none;
  padding: 0;
}

.sidebar__navigation li {
  margin: 10px 0;
}

.sidebar__navigation a {
  text-decoration: none;
  color: var(--color-primary);
}

.sidebar__navigation a:hover {
  text-decoration: underline;
}
</style>