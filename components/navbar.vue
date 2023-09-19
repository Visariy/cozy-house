<template>
  <nav class="navbar">
    <Logo :is-light="props.isLight"></Logo>
    <li class="navbar__links">
      <ul>
        <NuxtLink
          class="link"
          :class="{ light: props.isLight, current: route.path === '/' }"
          :to="'/'"
          >About the shelter</NuxtLink
        >
      </ul>
      <ul>
        <NuxtLink
          class="link"
          :class="{ light: props.isLight, current: route.path === '/petsList' }"
          :to="'/petsList'"
          >Our pets</NuxtLink
        >
      </ul>
      <ul>
        <NuxtLink
          class="link"
          :class="{ light: props.isLight, current: route.path === '/#help' }"
          to="#help"
          >Help the shelter</NuxtLink
        >
      </ul>
      <ul>
        <NuxtLink
          class="link"
          :class="{ light: props.isLight, current: route.path === '/#footer' }"
          to="#footer"
          >Contacts</NuxtLink
        >
      </ul>
    </li>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "#vue-router";

const route = useRoute();

const props = defineProps({
  isLight: {
    type: Boolean,
    default: false,
  },
  isCurrent: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.navbar {
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 30px 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__links {
    display: flex;
    justify-content: space-between;
    .link {
      text-decoration: none;
      font-family: $links-font;
      color: $links-normal-color;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      cursor: pointer;
      &:hover {
        color: $light-font-color;
      }
    }
    .light {
      color: $dark-font-color;
      &:hover {
        color: black;
      }
    }

    .current {
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background: $button-normal-color;
        transition: width 0.3s;
      }
    }
  }
}
</style>
