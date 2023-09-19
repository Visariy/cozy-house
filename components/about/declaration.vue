<template>
  <div class="about-content">
    <img class="about-content__image" :src="'/about-pets.png'" alt="pets" />
    <div class="about-content__text">
      <h2 class="title">About the shelter “Cozy House”</h2>
      <p class="subtitle">
        Currently we have 121 dogs and 342 cats on our hands and statistics show
        that only 20% of them will find a family. The others will continue to
        live with us and will be waiting for a lucky chance to become dearly
        loved.
      </p>
      <p class="subtitle second">
        We feed our wards with the best food and make sure that they do not get
        sick, feel comfortable (including psychologically) and well. We are
        supported by 87 volunteers and 28 employees of various skill levels.
        About 12% of the animals are taken by the shelter staff. Taking care of
        the animals, they become attached to the pets and would hardly ever
        leave them alone.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
@import "~/assets/scss/breakpoints.scss";
.about-content {
  max-width: 1280px;
  align-items: center;
  margin: 0 auto;
  padding: 80px 40px 100px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &__image {
    padding-left: 175px;
  }
  &__text {
    display: grid;
    padding-right: 175px;
    .title {
      max-width: 370px;
      margin: 0;
      padding-bottom: 25px;
      font-family: $headers-font;
      color: $dark-font-color;
      font-size: 35px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: 0.06em;
      text-align: left;
    }
    .subtitle {
      margin: 0;
      padding-bottom: 25px;
      font-family: $links-font;
      color: $paragraph-font-color;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
    }
    .second {
      padding-bottom: 14px;
    }
  }
}

@media screen and (max-width: $dekstop) {
  .about-content {
    display: flex;
    flex-direction: column-reverse;
    .about-content__text {
      max-width: 430px;
      padding: 0 0 80px 0;
    }
    .about-content__image {
      padding: 0;
    }
  }
}
</style>
