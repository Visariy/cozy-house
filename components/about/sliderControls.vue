<template>
  <div class="slider-controller">
    <UiRoundButton @click="swiper.slidePrev()">
      <img class="back" :src="'/Arrow.svg'" />
    </UiRoundButton>
    <UiRoundButton @click="swiper.slideNext()">
      <img class="forward" :src="'/Arrow.svg'" />
    </UiRoundButton>
  </div>
</template>

<script setup lang="ts">
const swiper = useSwiper();
</script>

<style scoped lang="scss">
.slider-controller {
  position: absolute;
  right: 0px;
  left: 0px;
  top: 40%;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  .forward {
    transform: rotate(180deg);
  }
}
</style>
