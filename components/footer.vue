<template>
  <div class="footer">
    <div class="footer__content">
      <div class="contacts">
        <h3 class="title">For questions and suggestions</h3>
        <div class="mail">
          <img :src="'/icon-email.svg'" alt="mail" />
          <h4 class="info">email@shelter.com</h4>
        </div>
        <div class="number">
          <img :src="'/icon-phone.svg'" alt="number" />
          <h4 class="info">+13 674 567 75 54</h4>
        </div>
      </div>
      <div class="locations">
        <h3 class="title">We are waiting for your visit</h3>
        <div class="first-adress">
          <img :src="'/icon-marker.svg'" alt="marker" />
          <h4 class="info">
            1 Central Street, Boston (entrance from the store)
          </h4>
        </div>
        <div class="second-adress">
          <img :src="'/icon-marker.svg'" alt="marker" />
          <h4 class="info">18 South Park, London</h4>
        </div>
      </div>
      <img class="footer-image" :src="'/footer-puppy.png'" alt="dog" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";
@import "~/assets/scss/breakpoints.scss";
.footer {
  background: $main-gradient;
  &__content {
    padding: 40px 40px 0px 40px;
    margin: 0 auto;
    align-items: center;
    justify-items: center;
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .contacts {
      padding-bottom: 69px;
      max-width: 280px;
      .title {
        margin-bottom: 25px;
        font-family: $headers-font;
        font-size: 35px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: 0.06em;
        text-align: left;
        color: $subtitle-color;
      }
      .mail {
        display: flex;
        gap: 20px;
        padding-bottom: 20px;
        .info {
          margin-bottom: 20px;
          font-family: $headers-font;
          font-size: 20px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 0.06em;
          text-align: left;
          color: $title-color;
        }
      }
      .number {
        display: flex;
        gap: 20px;
        .info {
          margin-bottom: 20px;
          font-family: $headers-font;
          font-size: 20px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 0.06em;
          text-align: left;

          color: $title-color;
        }
      }
    }
    .locations {
      padding-bottom: 69px;
      max-width: 310px;
      .title {
        margin-bottom: 25px;
        font-family: $headers-font;
        font-size: 35px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: 0.06em;
        text-align: left;
        color: $subtitle-color;
      }
      .first-adress {
        display: flex;
        gap: 20px;
        .info {
          margin-bottom: 20px;
          font-family: $headers-font;
          font-size: 20px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 0.06em;
          text-align: left;
          max-width: 300px;
          color: $title-color;
        }
      }
      .second-adress {
        display: flex;
        gap: 20px;
        .info {
          margin-bottom: 20px;
          font-family: $headers-font;
          font-size: 20px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 0.06em;
          text-align: left;
          color: $title-color;
        }
      }
    }
    .footer-image {
      display: flex;
      align-self: end;
    }
  }
}

@media screen and (max-width: $dekstop) {
  .footer__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    justify-items: center;
  }

  .footer__content img:nth-child(3) {
    grid-column: span 2;
  } 
}

@media screen and (max-width: $tablet) {
  .footer__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-image {
    margin: 0 auto;
  }
}
</style>
