<script setup>
import PuzzleCard from "./components/PuzzleCard.vue";
import { computed, onMounted, ref, watch } from "vue";

const columns = ref(4);
const attempts = ref(0);

const cardCount = computed(() =>
  columns.value % 2 === 0 ? columns.value ** 2 : columns.value ** 2 - 1
);

const cards = ref([]);

function restart() {
  const randomApeId = () => Math.floor(Math.random() * 10000);
  const shuffleArray = (arr) =>
    arr
      .map((i) => ({ val: i, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((i) => i.val);
  const generatedCards = [];
  for (let i = 0; i < cardCount.value / 2; i++) {
    const apeId = randomApeId();
    const card = {
      key: `${apeId}A`,
      apeNumber: apeId,
      solved: false,
      peek: false,
    };
    generatedCards.push(card, { ...card, key: `${apeId}B` });
  }
  cards.value = shuffleArray(generatedCards);
  attempts.value = 0;
}

const peekedCards = computed(() => cards.value.filter((i) => i.peek));

function peek(card) {
  if (card.peek || card.solved) {
    return;
  }

  attempts.value = attempts.value + 1;

  if (peekedCards.value.length === 2) {
    cards.value.forEach((i) => (i.peek = false));
  }

  card.peek = true;

  if (
    peekedCards.value.length === 2 &&
    peekedCards.value[0].apeNumber === peekedCards.value[1].apeNumber
  ) {
    for (const card of cards.value) {
      if (card.peek) {
        card.solved = true;
      }
    }
  }
}

const score = computed(() => cards.value.filter((i) => i.solved).length / 2);
const scorePerc = computed(() =>
  ((100 * score.value) / Math.floor(attempts.value / 2)).toFixed(2)
);

onMounted(() => restart());
watch(columns, () => restart());
</script>

<template>
  <div class="app">
    <div class="header">
      <h1>Vue.js Puzzle</h1>
    </div>

    <div class="controls">
      <button @click="restart">Restart</button>
      <button @click="columns--" :disabled="columns <= 3">Size -</button>
      <button @click="columns++" :disabled="columns >= 8">Size +</button>

      <h3 style="text-align: right; padding-right: 20px">
        Score: {{ score }} Attempts: {{ Math.floor(attempts / 2) }} (Accuracy:
        {{ scorePerc }}%)
      </h3>
    </div>

    <div class="main">
      <puzzle-card
        v-for="card in cards"
        :card="card"
        :key="card.key"
        @click="peek(card)"
      />
    </div>

    <div class="footer">
      <hr />
      2022 J. Crhonek
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 1024px;
  padding: 10px;
  background: #dadada;
}

.header {
  text-align: center;
}

.controls {
  margin-bottom: 10px;
}

.main {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  grid-gap: 10px;
}

.footer {
  text-align: center;
  font-size: smaller;
}
</style>
