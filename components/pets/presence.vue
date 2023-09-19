<template>
  <div>
    <Swiper
      :modules="SwiperGrid"
      :breakpoints="breakpoints"
      :centered-slides="false"
      :grab-cursor="true"
    >
      <SwiperSlide v-for="pet in petStore.pets" :key="pet.id">
        <SliderItem :pet-image="pet.image" :pet-name="pet.name"></SliderItem>
      </SwiperSlide>
      <PetsControls></PetsControls>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { usePetStore } from "~/stores/pet";
import { SwiperGrid } from "#imports";

const petStore = usePetStore();

onMounted(() => {
  console.log(petStore.pets.length);
});

const breakpoints = {
    300: {
        slidesPerView: 1,
        spaceBetween: 40,
        grid: {
            rows: 3,
            fill: 'row',
        },
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
        grid: {
            rows: 3,
            fill: 'row',
        },
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 40,
        grid: {
            rows: 2,
            fill: 'row',
        },
    },
}
</script>

<style lang="scss">
.swiper {
  position: relative;
  @media (min-width: 768px) {
    max-width: 708px;
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
  }
  .swiper-slide {
    margin-bottom: 30px;
    width: 270px !important;
  }
  .controls {
    z-index: 1;
  }
}
.swiper-wrapper {
  width: 2480px;
}
</style>
