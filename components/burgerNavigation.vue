<template>
  <div class="wrapper">
    <li class="burger-links">
      <ul>
        <NuxtLink class="burger-link" :to="'/'">About the shelter</NuxtLink>
      </ul>
      <ul>
        <NuxtLink
          class="burger-link"
          :class="{
            current: route.path === '/petsList',
          }"
          :to="'/petsList'"
          >Our pets</NuxtLink
        >
      </ul>
      <ul>
        <NuxtLink
          class="burger-link"
          :class="{ current: route.path === '/#help' }"
          to="#help"
          >Help the shelter</NuxtLink
        >
      </ul>
      <ul>
        <NuxtLink
          class="burger-link"
          :class="{
            current: route.path === '/#footer',
          }"
          to="#footer"
          >Contacts</NuxtLink
        >
      </ul>
    </li>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#vue-router";

const route = useRoute();
</script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
@import "~/assets/scss/breakpoints.scss";
.wrapper {
    position: fixed;
    inset: 0;
    display: none;
    background-color: #292929;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    text-align: center;

    &.active {
        opacity: 1;
        display: block;
    }
    .burger-links {
    display: block;
    position: absolute;
    z-index: 200;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    text-wrap: nowrap;
    gap: 43px;

      .burger-link {
        text-decoration: none;
        color: $light-font-color;        
        font-family: Arial;
        font-size: 32px;
        font-weight: 400;
        line-height: 51px;
        letter-spacing: 0px;
        text-align: left;
      }

    @media (max-width: $tablet) {
        translate: -50% -50%;
    }
}
}
</style>
