<template>
  <div class="topbar">
    <div class="topbar__logo">
      <img src="@/assets/logo.svg" alt="Logo" />
    </div>
    <nav class="topbar__navigation">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/payments">Payments</router-link></li>
        <li><router-link to="/risk">Risk Assessment</router-link></li>
        <li><router-link to="/ai-insights">AI Insights</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Topbar',
});
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-background);
  box-shadow: var(--shadow-elevation);
}

.topbar__logo img {
  height: 40px;
}

.topbar__navigation ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.topbar__navigation a {
  text-decoration: none;
  color: var(--color-primary);
}

.topbar__navigation a:hover {
  text-decoration: underline;
}
</style>