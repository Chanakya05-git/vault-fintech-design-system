<template>
  <div class="security-checklist">
    <h2>Security Checklist</h2>
    <ul>
      <li>
        <input type="checkbox" id="two-factor-auth" />
        <label for="two-factor-auth">Enable Two-Factor Authentication</label>
      </li>
      <li>
        <input type="checkbox" id="strong-passwords" />
        <label for="strong-passwords">Use Strong Passwords</label>
      </li>
      <li>
        <input type="checkbox" id="regular-updates" />
        <label for="regular-updates">Keep Software Updated</label>
      </li>
      <li>
        <input type="checkbox" id="phishing-awareness" />
        <label for="phishing-awareness">Be Aware of Phishing Attempts</label>
      </li>
      <li>
        <input type="checkbox" id="secure-connections" />
        <label for="secure-connections">Use Secure Connections (HTTPS)</label>
      </li>
      <li>
        <input type="checkbox" id="data-backup" />
        <label for="data-backup">Regularly Backup Data</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SecurityChecklist',
});
</script>

<style scoped>
.security-checklist {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.security-checklist h2 {
  margin-bottom: 16px;
}

.security-checklist ul {
  list-style-type: none;
  padding: 0;
}

.security-checklist li {
  margin: 8px 0;
}
</style>