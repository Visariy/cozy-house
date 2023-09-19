<template>
  <div class="pet-list">
  <Navbar :is-light="true"></Navbar>
  <div class="pets">
    <div>
      <h2 class="title">
        Our friends who
        <br />
        are looking for a houses
      </h2>
    </div>
    <PetsPresence class="swiper"></PetsPresence>
  </div>
</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.pet-list {
  
  .pets {
    background: #f6f6f6;
  }
    .title {
      text-align: center;
      font-family: $headers-font;
      color: $dark-font-color;
      font-size: 35px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: 0.06em;
      padding-top: 80px;
      padding-bottom: 60px;
      margin: 0;
      display: flex;
      justify-content: center;
  }
}
</style>
