<template>
  <div class="risk-screen">
    <h1>Risk Assessment</h1>
    <p>Evaluate your financial risk with our comprehensive tools.</p>
    
    <section class="risk-summary">
      <h2>Risk Summary</h2>
      <KPIStat :value="riskScore" label="Risk Score" />
      <InsightPill v-for="insight in insights" :key="insight.id" :insight="insight" />
    </section>

    <section class="risk-factors">
      <h2>Risk Factors</h2>
      <TransactionList :transactions="riskFactors" />
    </section>

    <section class="recommendations">
      <h2>Recommendations</h2>
      <RecommendationList :recommendations="recommendations" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import KPIStat from '@/components/finance/KPIStat.vue';
import InsightPill from '@/patterns/ai-assistant/InsightPill.vue';
import TransactionList from '@/components/finance/TransactionList.vue';
import RecommendationList from '@/patterns/ai-assistant/RecommendationList.vue';

export default defineComponent({
  name: 'RiskScreen',
  components: {
    KPIStat,
    InsightPill,
    TransactionList,
    RecommendationList,
  },
  setup() {
    const riskScore = ref(75); // Example risk score
    const insights = ref([
      { id: 1, text: 'High exposure to volatile assets' },
      { id: 2, text: 'Diversification needed in portfolio' },
    ]);
    const riskFactors = ref([
      { id: 1, description: 'Stock market volatility' },
      { id: 2, description: 'Economic downturn risks' },
    ]);
    const recommendations = ref([
      { id: 1, text: 'Consider reallocating assets' },
      { id: 2, text: 'Increase cash reserves' },
    ]);

    return {
      riskScore,
      insights,
      riskFactors,
      recommendations,
    };
  },
});
</script>

<style scoped>
.risk-screen {
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
}

.risk-summary,
.risk-factors,
.recommendations {
  margin-bottom: 2rem;
}
</style>