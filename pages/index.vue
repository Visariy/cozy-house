<template>
  <div class="main-container">
    <AboutWelcome></AboutWelcome>
  </div>
  <div class="about-container">
    <AboutDeclaration></AboutDeclaration>
  </div>
  <div class="slider-container">
    <div class="content">
      <div class="title">
        <h2 class="title top">Our friends who</h2>
        <h2 class="title bottom">are looking for a houses</h2>
      </div>
      <div class="slider-items">
        <AboutSlider></AboutSlider>
      </div>
      <div class="rest-pets-container">
        <button class="rest-button">Get to know the rest</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.main-container {
  background: linear-gradient(to right, $gradient-first, 25%, $gradient-second);
}
.slider-container {
  background: #f6f6f6;
  .title {
    text-align: center;
    font-family: $headers-font;
    color: $dark-font-color;
    font-size: 35px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0.06em;
    .top {
      padding-top: 80px;
      margin: 0;
      display: flex;
      justify-content: center;
    }
    .bottom {
      padding-bottom: 60px;
      margin: 0;
      display: flex;
      justify-content: center;
    }
  }
  .content {
    max-width: 1280px;
    margin: 0 auto;
    .slider-items {
      padding-left: 40px;
      padding-right: 40px;
      display: flex;
      justify-content: space-between;
    }
    .rest-pets-container {
      padding: 60px 0px 100px 0px;
      .rest-button {
        display: flex;
        margin: 0 auto;
      }
    }
  }
}
</style>
