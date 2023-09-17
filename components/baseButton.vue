<template>
    <button :class="[checkStyle() ? 'full-button' : 'pole-button' ]">{{ props.text }}</button>
</template>

<script setup lang="ts">

const props = defineProps({
    text: String,
    buttonStyle: {
        type: String,
        required: true
    }
})



const checkStyle = () => {
    switch(props.buttonStyle) {
        case "full":
            return true;
        case "pole":
            return false;    
    }
    return true
}

onMounted(() => {
    console.log(checkStyle());
})

</script>

<style scoped lang="scss">
@import "~/assets/scss/colors.scss";
@import "~/assets/scss/typography.scss";

.full-button {
    border:none;
    cursor: pointer;
    padding: 15px 45px 15px 45px;
    border-radius: 100px;
    color: $dark-font-color;
    background: $button-normal-color;
    &:hover{
        background: $button-hover-color;
    }
}

</style>