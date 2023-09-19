<template>
  <div class="item-container">
    <div class="pet-card">
      <img class="pet-image" :src="petImage" alt="pet-image" />
      <h4 class="pet-name">
        {{ petName }}
      </h4>
      <UiBaseButton @click="prop.handleClick" :buttonStyle="'pole'" :text="'Learn more'" class="pet-info-button"></UiBaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">

const prop = defineProps({
  petName: String,
  petImage: String,
  handleClick: Function,
});
</script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.item-container {
  .pet-card {
    background: white;
    padding-bottom: 15px;
    .pet-image {
      filter: brightness(101%);
    }
    .pet-name {
      margin: 0;  
      display: flex;
      justify-content: center;
      padding-top: 30px;
      padding-bottom: 30px;
      font-family: $headers-font;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0.06em;
    }
    .pet-info-button {
      display: flex;
      margin: 0 auto;
    }
  }
}
</style>
