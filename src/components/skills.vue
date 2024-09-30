<script setup lang="ts">
import { computed } from "vue";
import {
  CharacterSkill,
  CharacterSkills,
  CharacterSkillType,
} from "../services/character";
import Skill from "./skill.vue";

export type PropType = {
  modelValue: CharacterSkills;
};
export type EmitType = {
  (e: "update:modelValue", value: CharacterSkills): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();

const strengthSkills = computed({
  get() {
    return props.modelValue.strength;
  },
  set(value: CharacterSkill[]) {
    emits("update:modelValue", {
      ...props.modelValue,
      strength: value,
    });
  },
});
const heartSkills = computed({
  get() {
    return props.modelValue.heart;
  },
  set(value: CharacterSkill[]) {
    emits("update:modelValue", {
      ...props.modelValue,
      heart: value,
    });
  },
});
const witsSkills = computed({
  get() {
    return props.modelValue.wits;
  },
  set(value: CharacterSkill[]) {
    emits("update:modelValue", {
      ...props.modelValue,
      wits: value,
    });
  },
});
</script>

<template>
  <div class="skills-wrapper">
    <h2>Skills</h2>
    <div class="outer-section">
      <div class="inner-section attribute right-seperator">
        <template v-for="n in 6">
          <Skill
            :type="CharacterSkillType.Strength"
            v-model="strengthSkills[n - 1]"
          />
        </template>
      </div>
      <div class="inner-section attribute right-seperator">
        <template v-for="n in 6">
          <Skill
            :type="CharacterSkillType.Heart"
            v-model="heartSkills[n - 1]"
          />
        </template>
      </div>
      <div class="inner-section attribute">
        <template v-for="n in 6">
          <Skill :type="CharacterSkillType.Wits" v-model="witsSkills[n - 1]" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.skills-wrapper {
  text-align: center;
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
