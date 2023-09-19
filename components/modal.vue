<template>
  <div v-if="visible">
    <div class="modal-background" @click="handleClose">
      <div class="modal" @click.stop>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "~/composables/useModal";

const props = defineProps<{
  modalKey?: string;
  modelValue?: boolean;
  modalType?: string;
}>();

const { modelValue } = toRefs(props);

const { open, close, toggle, visible } = useModal(props.modalKey);

const emit = defineEmits<{
  closed: [];
  proceed: [];
  "update:modelValue": [value: boolean];
}>();

defineExpose({
  open,
  close,
  toggle,
  visible,
});

const handleClose = () => {
  close();
  emit("closed");
};

const handleProceed = () => {
  close();
  emit("proceed");
};

watch(
  modelValue,
  (value, oldValue) => {
    if (value !== oldValue) {
      toggle(value);
    }
  },
  { immediate: true },
);

watch(visible, (value) => {
  emit("update:modelValue", value);
});
</script>

<style scoped lang="scss">
.modal-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  animation: fadeIn 0.2s;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  .modal {
    width: 900px;
    max-height: calc(100dvh);
    overflow-y: auto;
    border-radius: 9px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    animation: slideIn 0.2s;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    display: flex;
    flex-direction: column;
    align-self: center;
    position: relative;
    background: white;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes slideOut {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(100px);
  }
}

@media screen and (max-width: 768px) {
  .modal-enter-from:deep(.modal),
  .modal-leave-to:deep(.modal) {
    animation: slideOut 0.2s linear;
  }
}

@media screen and (max-width: 768px) {
  .modal-background {
    justify-content: flex-start;
  }

  .modal {
    max-width: 400px;
    border-radius: 6px;
    margin: 60px auto 0;
    max-height: calc(100dvh - 120px);
  }
}
</style>
