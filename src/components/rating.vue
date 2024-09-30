<script lang="ts" setup>
import { computed } from "vue";

export type PropType = {
  radioName: string;
  modelValue: number;
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
  <h3>Rating</h3>
  <div class="row justify-space-evenly">
    <template v-for="n in 7">
      <div class="column">
        <div class="rating-label">{{ n + 1 }}</div>
        <input
          class="rating-radio"
          type="radio"
          :name="radioName"
          :checked="n + 1 == value"
          @click="() => (value = n + 1)"
        />
        <template v-if="n == 1">
          <div class="rating-text">Poor</div>
        </template>

        <template v-if="n == 3">
          <div class="rating-text">Fair</div>
        </template>

        <template v-if="n == 5">
          <div class="rating-text">Good</div>
        </template>

        <template v-if="n == 7">
          <div class="rating-text">Great</div>
        </template>
      </div>
    </template>
  </div>
</template>

<style lang="css" scoped>
.rating-label {
  display: flex;
  font-weight: bold;
  font-size: 20px;
}
h3 {
  color: #968b80;
  font-size: 16px;
}
.rating-radio {
  width: 20px;
  height: 20px;
  color: #b0232e;
  background-color: #fffdee;
  border: 2px #b0232e solid;
}
.rating-text {
  margin-top: 5px;
  font-size: 14px;
  color: #968b80;
}
</style>
