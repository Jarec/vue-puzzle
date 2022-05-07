<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const { solved, peek, apeNumber } = toRefs(props.card);

const styleOverride = computed(() => {
  if (solved.value || peek.value) {
    return {
      "background-image": `url("https://thisboredapedoesnotexist.com/images/${apeNumber.value}.jpg")`,
      "background-size": "cover",
      transition: "all 0.4s ease",
      transform: "rotateY(180deg)",
    };
  } else {
    return {};
  }
});
</script>

<template>
  <Transition>
    <div>
      <div class="card" :style="styleOverride" />
    </div>
  </Transition>
</template>

<style scoped>
.card {
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid black;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
