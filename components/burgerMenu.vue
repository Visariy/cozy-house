<template>
  <div class="burger">
    <span />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.alternative .burger span,
.alternative .burger span:before,
.alternative .burger span:after {
  background-color: #F1CDB3;
}
.burger.alternative.active span,
.burger.alternative.active span:before,
.burger.alternative.active span:after {
  background-color: #F1CDB3;
}

.burger span {
  translate: -30px 10px;
  height: 2px;
  width: 30px;
  z-index: 300;
  background-color: #F1CDB3;
  border-radius: 20px;
  position: absolute;
  transition-duration: 0.3s;
}
.burger span:before {
  left: 0;
  position: absolute;
  top: -8px;
  height: 2px;
  width: 30px;
  background-color: #F1CDB3;
  content: "";
  border-radius: 20px;
  transition-duration: 0.3s;
  transition:
    transform 0.3s,
    top 0.3s 0.3s;
}
.burger span:after {
  left: 0;
  position: absolute;
  top: 8px;
  height: 2px;
  width: 30px;
  background-color: #F1CDB3;
  content: "";
  border-radius: 20px;
  transition-duration: 0.3s;
  transition:
    transform 0.3s,
    top 0.3s 0.3s;
}
.burger.active span {
  transition-duration: 0.3s;
  transition-delay: 0.3s;
  rotate: 90deg;
}
.burger.active span:before {
  transition:
    top 0.3s,
    transform 0.3s 0.3s;
  top: 8px;
  transform: rotate(0deg);
}
.burger.active span:after {
  transition:
    top 0.4s,
    transform 0.3s 0.3s;
  top: -8px;
  transform: rotate(0deg);
}
</style>
