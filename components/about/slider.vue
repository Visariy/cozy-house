<template>
  <div v-for="pet in pets" class="slider">
    <SliderItem :pet-image="pet.image" :pet-name="pet.name"></SliderItem>
  </div>
</template>

<script setup lang="ts">
const pets = [
  { image: "pets-jennifer.png", name: "jenifer" },
  { image: "pets-katrine.png", name: "katrine" },
  { image: "pets-woody.png", name: "woody" },
];
</script>

<style scoped lang="scss"></style>
