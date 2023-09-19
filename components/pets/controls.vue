<template>
  <div class="slider-controller">
    <UiRoundButton
      :is-active="swiper.activeIndex === 0"
      @click="swiper.slidePrev()"
    >
      <img class="reverse single-arrow" src="single_arrow.svg" />
    </UiRoundButton>
    <UiRoundButton
      :is-active="swiper.activeIndex === 0"
      @click="swiper.slideTo(0)"
    >
      <img class="reverse double-arrow" src="double_arrow.svg" />
    </UiRoundButton>
    <UiRoundButton>
      <span class="page">{{ swiper.activeIndex + 1 }}</span>
    </UiRoundButton>
    <UiRoundButton
      :is-active="swiper.isEnd"
      @click="swiper.slideTo(petStore.pets.length - 12)"
    >
      <img class="double-arrow" src="double_arrow.svg" />
    </UiRoundButton>
    <UiRoundButton :is-active="swiper.isEnd" @click="swiper.slideNext()">
      <img class="single-arrow" src="single_arrow.svg" />
    </UiRoundButton>
  </div>
</template>

<script setup lang="ts">
import { usePetStore } from "~/stores/pet";

const petStore = usePetStore();

const swiper = useSwiper();
</script>

<style scoped lang="scss">
.slider-controller {
  padding: 45px 0px 100px 0px;
  max-width: 340px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  .reverse {
    transform: rotate(180deg);
  }
  .page {
    width: 10px;
    height: 19px;
  }
  .double-arrow {
    width: 25px;
    height: 11px;
  }
  .single-arrow {
    width: 10px;
    height: 11px;
  }
}
</style>
