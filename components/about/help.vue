<template>
  <div class="help">
    <h2 class="title">
      How you can help <br />
      our shelter
    </h2>
    <div class="help__ways">
      <div v-for="way in ways" :key="way.id" class="way">
        <div class="way__item">
          <img :src="way.image" class="image" />
          <h4 class="description">{{ way.description }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ways = [
  { id: 1, description: "Pet food", image: "icon-food.svg" },
  { id: 2, description: "Transportation", image: "icon-transportation.svg" },
  { id: 3, description: "Toys", image: "icon-toys.svg" },
  { id: 4, description: "Bowls and cups", image: "icon-bowls-and-cups.svg" },
  { id: 5, description: "Shampoos", image: "icon-shampoos.svg" },
  { id: 6, description: "Vitamins", image: "icon-vitamins.svg" },
  { id: 7, description: "Medicines", image: "icon-medicines.svg" },
  {
    id: 8,
    description: "Collars / leashes",
    image: "icon-collars-leashes.svg",
  },
  { id: 9, description: "Sleeping areas", image: "icon-sleeping-area.svg" },
];
</script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.help {
  .title {
    font-family: $headers-font;
    color: $dark-font-color;
    font-size: 35px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0.06em;
    display: flex;
    text-align: center;
    justify-content: center;
  }
  &__ways {
    max-width: 1150px;
    margin: 0 auto;
    padding-top: 60px;
    & > div {
      width: 180px;
    }
    & > :nth-child(6) {
      margin-left: 100px;
    }
    & > :last-child {
      margin-right: 120px;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 55px;
    justify-content: space-around;
    .way {
      text-align: center;
      &__item {
        .description {
          font-family: $headers-font;
          color: $dark-font-color;
          font-size: 20px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 0.06em;
        }
      }
    }
  }
}
</style>
