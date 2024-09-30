<script setup lang="ts">
import { computed } from "vue";
import { CharacterStats } from "../services/character";
import Rating from "./rating.vue";
import Stat from "./stat.vue";

export type PropType = {
  modelValue: CharacterStats;
};
export type EmitType = {
  (e: "update:modelValue", value: CharacterStats): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();

const strengthRating = computed({
  get() {
    return props.modelValue.strength.rating;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      strength: {
        ...props.modelValue.strength,
        rating: value,
      },
    });
  },
});
const strengthTN = computed({
  get() {
    return props.modelValue.strength.target;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      strength: {
        ...props.modelValue.strength,
        target: value,
      },
    });
  },
});
const heartRating = computed({
  get() {
    return props.modelValue.heart.rating;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      heart: {
        ...props.modelValue.heart,
        rating: value,
      },
    });
  },
});
const heartTN = computed({
  get() {
    return props.modelValue.heart.target;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      heart: {
        ...props.modelValue.heart,
        target: value,
      },
    });
  },
});
const witsRating = computed({
  get() {
    return props.modelValue.wits.rating;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      wits: {
        ...props.modelValue.wits,
        rating: value,
      },
    });
  },
});
const witsTN = computed({
  get() {
    return props.modelValue.wits.target;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      wits: {
        ...props.modelValue.wits,
        target: value,
      },
    });
  },
});
</script>

<template>
  <div class="outer-section container">
    <div class="inner-section attribute right-seperator">
      <h2>Strength</h2>
      <Rating v-model="strengthRating" radio-name="strength" />
      <Stat
        v-model="strengthTN"
        label="Strength TN"
        sublabel="20 - Rating"
      />
    </div>
    <div class="inner-section attribute right-seperator">
      <h2>Heart</h2>
      <Rating v-model="heartRating" radio-name="heart" />
      <Stat v-model="heartTN" label="Heart TN" sublabel="20 - Rating" />
    </div>
    <div class="inner-section attribute">
      <h2>Wits</h2>
      <Rating v-model="witsRating" radio-name="wits" />
      <Stat v-model="witsTN" label="Wits TN" sublabel="20 - Rating" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  min-width: 900px;
}
.attribute {
  display: flex;
  align-items: center;
  width: 300px;
  text-align: center;

  &.right-seperator {
    border-right: 1px solid #968b80;
    padding-right: 15px;
  }
}
</style>
