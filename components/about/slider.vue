<template>
  <div class="wrapper">
    <Swiper
      :loop="true"
      :breakpoints="breakpoints"
      :centered-slides="false"
      :grab-cursor="true"
    >
      <SwiperSlide v-for="pet in petStore.pets" :key="pet.id">
        <SliderItem
          :handle-click="() => openModal(pet)"
          :pet-image="pet.image"
          :pet-name="pet.name"
        ></SliderItem>
      </SwiperSlide>
      <AboutSliderControls class="controls"></AboutSliderControls>
    </Swiper>
    <PetModal :modal-key="modalKey" :pet="currentPet"></PetModal>
  </div>
</template>

<script setup lang="ts">
import { usePetStore } from "~/stores/pet";
import { useModal } from "~/composables/useModal";

interface IPet {
  id: string;
  name: string;
  breed: string;
  story: string;
  age: string;
  inoculations: string;
  diseases: string;
  parasites: string;
  image: string;
}

const petStore = usePetStore();

const modalKey = "testkey";

const modal = useModal(modalKey);

const currentPet = ref({});

const openModal = (pet: IPet) => {
  currentPet.value = pet;
  modal.open();
};

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 90,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 1100px;
  margin: 0 auto;
  .swiper {
    padding-inline: 55px;
    .swiper-slide {
      width: 270px !important;
    }
    .controls {
      z-index: 1;
    }
  }
}
</style>
