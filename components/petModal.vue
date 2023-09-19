<template>
  <Modal :modal-key="modalKey">
    <div class="container">
      <img :src="pet.image" class="image" />
      <div class="content">
        <div class="title">
          <h3>{{ props.pet.name }}</h3>
          <h4>{{ props.pet.breed }}</h4>
        </div>
        <p class="story">
          {{ pet.story }}
        </p>
        <ul class="info">
          <div v-for="(item, key) in props.pet" :key="key">
            <li v-if="choosedKeys.indexOf(key) !== -1">
              <strong>{{ key }}:</strong>
              {{ item }}
            </li>
          </div>
        </ul>
      </div>
      <!-- <RoundButton @click="handleClick"
                ><NuxtImg src="/assets/ui-icons/Cross.svg"
            /></RoundButton> -->
    </div>
  </Modal>
</template>

<script setup lang="ts">
const props = defineProps({
  pet: {
    type: Object,
    required: true,
  },
  modalKey : {
    type: String,
    required: true
  }
});

const choosedKeys = ["age", "inoculations", "diseases", "parasites"];
</script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
.container {
  display: flex;
  .image {
    max-width: 435px;
    flex: 1;
    object-fit: cover;
    filter: brightness(101%);
  }
  .content {
    padding-left: 29px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    .title {
      h3 {
        padding: 50px 0px 10px 0px;
        font-family: $headers-font;
        color: #000000;
        font-size: 35px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: 0.06em;
        margin: 0;
      }
      h4 {
        font-family: $headers-font;
        color: #000000;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.06em;
        text-align: left;
        font-size: 20px;
        margin: 0;
      }
    }
    .story {
      color: black;
      font-size: 15px;
      font-family: Arial;
      line-height: 160%;
      max-width: 350px;
      padding: 40px 0px 40px 0px;
    }
    .info {
      padding: 0px 0px 78px 30px;
      list-style: none;
      font-family: $headers-font;
      font-weight: 400;
      li{
        padding-bottom: 10px;
      }
    }
    ul li::before {
      content: "•";
      color: $button-normal-color; /* Замените на желаемый цвет */
      display: inline-block; 
      width: 1em;
      margin-left: -1em;
    } 
  }
}
</style>
