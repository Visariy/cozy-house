<template>
    <div class="item-container">
        <div class="pet-card">
            <img class="pet-image" :src="petImage" alt="pet-image">
            <div class="pet-name">
                {{ petName }}
            </div>
            <button class="pet-info-button">
                Learn More
            </button>
        </div>
    </div>
</template>
  
<script setup lang="ts">

const prop = defineProps({
    petName: String,
    petImage: String
})

</script>
  
<style scoped lang="scss">
    .item-container {
        .pet-card {
            background: white;
            padding-bottom: 15px;
            .pet-image {
                filter: brightness(101%);
            }
            .pet-name {
               display: flex;
               justify-content: center;
               padding-top: 30px;
               padding-bottom: 30px;
            }
            .pet-info-button {
                display: flex;
                margin: 0 auto;
            }
        }
    }
</style>
  