<template>
  <button :disabled="isActive" class="circle">
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  isActive: Boolean,
  background: String,
  circleType: String,
});
</script>

<style lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";

.circle {
  background: white;
  border: 2px solid $button-normal-color;
  border-radius: 100px;
  height: 52px;
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: $button-hover-color;
  }
  .content {
    display: flex;
    justify-content: center;
  }
}
</style>
