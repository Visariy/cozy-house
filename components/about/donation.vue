<template>
  <div class="donation">
    <img class="donation__image" src="donation-dog.png" />
    <div class="donation__text">
      <div class="title">You can also make a donation</div>
      <h5 class="bank-info">Name of the bank / Type of bank account</h5>
      <div class="card">
        <img class="card__image" src="credit-card.svg" />
        <h4 class="card__number">8380 2880 8028 8791 7435</h4>
      </div>
      <p class="description">
        Legal information and lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam.
        Praesent ultrices maximus tortor et vulputate. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
@import "~/assets/scss/breakpoints.scss";
.donation {
  margin: 0 auto;
  max-width: 1200px;
  gap: 30px;
  padding: 80px 182px 100px 182px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &__text {
    .title {
      padding-bottom: 20px;
      max-width: 300px;
      text-align: center;
      font-family: $headers-font;
      color: $dark-font-color;
      font-size: 35px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: 0.06em;
      text-align: left;
    }
    .bank-info {
      padding-bottom: 20px;
      margin: 0;
      font-family: $headers-font;
      color: $dark-font-color;
      font-size: 15px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.06em;
      text-align: left;
    }
    .card {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 15px;
      background: $button-normal-color;
      border-radius: 9px;
      max-height: 43px;
      max-width: 349px;
      display: flex;
      &__number {
        font-family: $headers-font;
        color: $dark-font-color;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.06em;
        text-align: left;
      }
      &__image {
        padding-left: 15px;
      }
    }
    .description {
      max-width: 380px;
      font-family: $links-font;
      color: $color-dark-m;
      font-size: 12px;
      font-style: italic;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
  &__image {
    display: flex;
    align-self: center;
  }
}

@media screen and (max-width: $dekstop) {
  .donation {
    display: flex;
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: $tablet) {
  .donation {
    padding: 40px 0px 0px 0px;
    &__text {
      display: flex;
      flex-direction: column-reverse;
    }
    .description {
      max-width: 351px;
    }
    &__image {
      max-width: 351px;
    }
  }
}
</style>
