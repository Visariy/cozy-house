<template>
  <section class="main-container">
    <AboutWelcome></AboutWelcome>
  </section>
  <section class="about-container">
    <AboutDeclaration></AboutDeclaration>
  </section>
  <section class="slider-container">
    <div class="content">
      <div>
        <h2 class="title">
          Our friends who
        <br />
        are looking for a houses
        </h2>
      </div>
      <div>
        <AboutSlider></AboutSlider>
      </div>
      <div class="rest-pets-container">
        <NuxtLink style="text-decoration: none" :to="'/petsList'">
          <UiBaseButton
            :button-style="'full'"
            :text="'Get to know the rest'"
            class="rest-button"
            >Get to know the rest</UiBaseButton
          >
      </NuxtLink>
      </div>
    </div>
  </section>
  <section id="help" class="help-container">
    <AboutHelp></AboutHelp>
  </section>
  <section class="donation-container">
    <AboutDonation></AboutDonation>
  </section>
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
    padding-top: 80px;
    padding-bottom: 60px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .content {
    max-width: 1280px;
    margin: 0 auto;
    .slider {
      padding-left: 40px;
      padding-right: 40px;
      display: flex;
      justify-content: space-between;
      position: relative;
      &__items {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
      }
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
.help-container {
  padding: 80px 40px 100px 40px;
}

.donation-container {
  background: $section-dark-backgroud;
}
</style>
