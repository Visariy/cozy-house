<template>
  <div class="navbar-container">
    <Logo></Logo>
    <Navbar></Navbar>
  </div>
  <div class="main-content">
    <div class="main-content__text">
      <h2 class="main-appeal">Not only people need a house</h2>
      <p class="sub-appeal">
        We offer to give a chance to a little and nice puppy with an extremely
        wide and open heart. He or she will love you more than anybody else in
        the world, you will see!
      </p>
      <div class="text__button">
        <BaseButton :button-style="'full'" :text="'Make a friend'"></BaseButton>
      </div>
    </div>
    <img src="start-screen-puppy.png" alt="puppy" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 30px 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-content {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px 40px 0px 40px;
  &__text {
    padding-top: 163px;
    max-width: 460px;
    max-height: 322px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    .main-appeal {
      margin: 0;
      padding-right: 150px;
      font-family: $headers-font;
      font-size: 44px;
      font-weight: 400;
      line-height: 57px;
      letter-spacing: 0em;
      text-align: left;
      color: $light-font-color;
      padding-bottom: 42px;
    }
    .sub-appeal {
      margin: 0;
      font-family: Arial;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      font-family: $links-font;
      color: $links-normal-color;
      padding-bottom: 42px;
    }
    .text__button {
    }
  }
}
</style>
