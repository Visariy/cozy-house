<template>
  <div class="navbar">
    <li class="navbar__links">
      <ul class="link">
        About the shelter
      </ul>
      <ul class="link">
        Our pets
      </ul>
      <ul class="link">
        Help the shelter
      </ul>
      <ul class="link">
        Contacts
      </ul>
    </li>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.navbar {
  max-width: 500px;
  &__links {
    display: flex;
    justify-content: space-between;
    .link {
      font-family: $links-font;
      color: $links-normal-color;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      cursor: pointer;
      &:hover{
        color: $light-font-color;
      }
    }
  }
}
</style>
