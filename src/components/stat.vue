<script setup lang="ts">
import { computed } from "vue";
import Diamond from "./field-styles/diamond.vue";
import Circle from "./field-styles/circle.vue";
import Square from "./field-styles/square.vue";
export type PropType = {
  modelValue: number;
  label: string;
  sublabel?: string;
  type?: "circle" | "diamond" | "square";
};

export type EmitType = {
  (e: "update:modelValue", value: number): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <template v-if="props.type == 'square'">
      <Square>
        <input class="stat-field black" type="number" v-model="value" />
      </Square>
      <div class="diamond-field-label square-text">{{ props.label }}</div>
    </template>
    <template v-else-if="props.type == 'circle'">
      <Circle>
        <input class="stat-field black" type="number" v-model="value" />
      </Circle>
      <div class="diamond-field-label circle-text">{{ props.label }}</div>
    </template>
    <template v-else>
      <Diamond>
        <input class="stat-field" type="number" v-model="value" />
      </Diamond>
      <div class="diamond-field-label">{{ props.label }}</div>
    </template>
    <div v-if="props.sublabel" class="diamond-field-sublabel">
      {{ props.sublabel }}
    </div>
  </div>
</template>

<style lang="css" scoped>
.stat-field {
  width: calc(100% + 7px);
  height: calc(100% - 5px);
  background: transparent;
  border: 0;
  outline: 0;
  color: #b0232e;
  font-size: 32px;
  text-align: center;

  &.black {
    color: #473e39;
  }
}
.diamond-field-label {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: -10px;

  &.circle-text {
    margin-top: -15px;
  }
  &.square-text {
    margin-top: -18px;
  }
}
.diamond-field-sublabel {
  position: relative;
  top: -8px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-size: 18px;
  text-align: center;
  color: #968b80;
}
</style>
