<script setup lang="ts">
import { computed } from "vue";
import { character, WeaponProficiency } from "../services/character";
import { RollFavoured, testOptions } from "../services/dice";
import RollButton from "./roll-button.vue";

export type PropType = {
  modelValue: WeaponProficiency;
};

export type EmitType = {
  (e: "update:modelValue", value: WeaponProficiency): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();

const name = computed({
  get() {
    return props.modelValue.name;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      name: value,
    });
  },
});
const amount = computed({
  get() {
    return props.modelValue.amount;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      amount: value,
    });
  },
});
function uncheck(value: number) {
  if (amount.value >= value) amount.value = value - 1;
  else amount.value = value;
}
function rollDiceForTest() {
  testOptions.value = {
    targetNumber: character.value.stats.strength.target,
    favoured: RollFavoured.Normal,
    proficiency: amount.value,
  };
}
</script>

<template>
  <div class="skill">
    <RollButton @click="rollDiceForTest" />
    <input type="text" v-model="name" />
    <template v-for="n in 6">
      <input type="checkbox" :checked="amount >= n" @click="() => uncheck(n)" />
    </template>
  </div>
</template>

<style lang="css" scoped>
.skill {
  display: flex;
  align-items: center;
  justify-content: center;

  .roll-dice {
    height: 15px;
    width: 15px;
    overflow: hidden;
    span {
      position: relative;
      top: -7px;
      left: -12px;
      transform: scale(0.5);
    }
  }

  input[type="text"] {
    font-size: 24px;
    width: 180px;
    margin-right: 10px;
  }
  input[type="checkbox"] {
    margin-top: 12px;
    width: 20px;
    height: 20px;
  }
}
</style>
