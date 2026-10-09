<template>
  <div class="app-shell">
    <Topbar />
    <div class="app-content">
      <Sidebar />
      <main class="main-area">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from './Topbar.vue';
import Sidebar from './Sidebar.vue';

export default defineComponent({
  name: 'AppShell',
  components: {
    Topbar,
    Sidebar,
  },
});
</script>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-content {
  display: flex;
  flex: 1;
}

.main-area {
  flex: 1;
  padding: 16px; /* Adjust padding as needed */
  overflow-y: auto;
}
</style>