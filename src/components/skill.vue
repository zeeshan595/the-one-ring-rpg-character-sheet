<script setup lang="ts">
import { computed } from "vue";
import {
  character,
  CharacterSkill,
  CharacterSkillType,
} from "../services/character";
import { RollFavoured, testOptions } from "../services/dice";
import RollButton from "./roll-button.vue"

export type PropType = {
  modelValue: CharacterSkill;
  type: CharacterSkillType;
};

export type EmitType = {
  (e: "update:modelValue", value: CharacterSkill): void;
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
const favoured = computed({
  get() {
    return props.modelValue.favoured;
  },
  set(value: boolean) {
    emits("update:modelValue", {
      ...props.modelValue,
      favoured: value,
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

function rollDiceForSkill() {
  let targetNumber = 20;
  switch (props.type) {
    case CharacterSkillType.Strength:
      targetNumber = character.value.stats.strength.target;
      break;
    case CharacterSkillType.Heart:
      targetNumber = character.value.stats.heart.target;
      break;
    case CharacterSkillType.Wits:
      targetNumber = character.value.stats.wits.target;
      break;
  }

  testOptions.value = {
    favoured: favoured.value ? RollFavoured.Favoured : RollFavoured.Normal,
    proficiency: amount.value,
    targetNumber,
  };
}
</script>

<template>
  <div class="skill">
    <RollButton @click="rollDiceForSkill" />
    <input type="checkbox" v-model="favoured" />
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

  input[type="text"] {
    font-size: 24px;
    width: 100px;
  }
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
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
}
</style>
