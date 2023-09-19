<template>
  <div class="logo">
    <h2 class="logo__title" :class="{ light: props.isLight }">Cozy House</h2>
    <div class="logo__subtitle" :class="{ light: props.isLight }">Shelter for pets in Boston</div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  isLight: {
    type: Boolean,
    default: false
  }
})


</script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.logo {
  &__title {
    margin: 0;
    font-family: $headers-font;
    font-size: 32px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0.06em;
    text-align: left;
    color: $title-color;
    margin-bottom: 0px;
    padding-bottom: 10px;
  }
  &__subtitle {
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.1em;
    text-align: left;
    color: $subtitle-color;
  }
  .light {
    color: $dark-font-color;
  }
}
</style>
