<script lang="ts" setup>
export type PropType = {
  noSpace?: boolean;
};
export type EmitType = {
  (e: "click"): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();
</script>

<template>
  <div class="container" :class="{ 'no-space': props.noSpace }">
    <button class="roll-dice" @click="() => emits('click')">
      <span class="material-symbols-outlined"> casino </span>
    </button>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: block;

  &.no-space {
    width: 0;
    height: 0;
  }

  .roll-dice {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 16px;
    height: 16px;

    span {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      top: -5px;
      left: -10px;
    }
  }
}
</style>
