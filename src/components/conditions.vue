<script lang="ts" setup>
import { computed } from "vue";
import { Character } from "../services/character";
import Stat from "./stat.vue";
import { RollFavoured, testOptions } from "../services/dice";

export type PropType = {
  modelValue: Character;
};
export type EmitType = {
  (e: "update:modelValue", value: Character): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();

function rollForProtection() {
  testOptions.value = {
    favoured: RollFavoured.Normal,
    targetNumber: 20,
    proficiency: props.modelValue.combat.protection.total,
  };
}

function rollForWisdom() {
  testOptions.value = {
    favoured: RollFavoured.Normal,
    targetNumber: props.modelValue.stats.wits.target,
    proficiency: props.modelValue.stats.wisdom,
  };
}
function rollForValour() {
  testOptions.value = {
    favoured: RollFavoured.Normal,
    targetNumber: props.modelValue.stats.heart.target,
    proficiency: props.modelValue.stats.valour,
  };
}

const rewardsAndVirtues = computed({
  get() {
    return props.modelValue.rewardsAndVirtues;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      rewardsAndVirtues: value,
    });
  },
});
const treasure = computed({
  get() {
    return props.modelValue.info.treasure;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      info: {
        ...props.modelValue.info,
        treasure: value,
      },
    });
  },
});
const valour = computed({
  get() {
    return props.modelValue.stats.valour;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      stats: {
        ...props.modelValue.stats,
        valour: value,
      },
    });
  },
});
const wisdom = computed({
  get() {
    return props.modelValue.stats.wisdom;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      stats: {
        ...props.modelValue.stats,
        wisdom: value,
      },
    });
  },
});
const adventurePoints = computed({
  get() {
    return props.modelValue.points.adventure;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      points: {
        ...props.modelValue.points,
        adventure: value,
      },
    });
  },
});
const skillPoints = computed({
  get() {
    return props.modelValue.points.skill;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      points: {
        ...props.modelValue.points,
        skill: value,
      },
    });
  },
});
const fellowshipPoints = computed({
  get() {
    return props.modelValue.points.fellowship;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      points: {
        ...props.modelValue.points,
        fellowship: value,
      },
    });
  },
});
const enduranceMax = computed({
  get() {
    return props.modelValue.endurance.maximum;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      endurance: {
        ...props.modelValue.endurance,
        maximum: value,
      },
    });
  },
});
const enduranceCurrent = computed({
  get() {
    return props.modelValue.endurance.current;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      endurance: {
        ...props.modelValue.endurance,
        current: value,
      },
    });
  },
});
const load = computed({
  get() {
    return props.modelValue.endurance.load;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      endurance: {
        ...props.modelValue.endurance,
        load: value,
      },
    });
  },
});
const fatigue = computed({
  get() {
    return props.modelValue.endurance.fatigue;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      endurance: {
        ...props.modelValue.endurance,
        fatigue: value,
      },
    });
  },
});
const hopeMax = computed({
  get() {
    return props.modelValue.hope.maximum;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      hope: {
        ...props.modelValue.hope,
        maximum: value,
      },
    });
  },
});
const hopeCurrent = computed({
  get() {
    return props.modelValue.hope.current;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      hope: {
        ...props.modelValue.hope,
        current: value,
      },
    });
  },
});
const shadow = computed({
  get() {
    return props.modelValue.hope.shadow;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      hope: {
        ...props.modelValue.hope,
        shadow: value,
      },
    });
  },
});
const scars = computed({
  get() {
    return props.modelValue.hope.scars;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      hope: {
        ...props.modelValue.hope,
        scars: value,
      },
    });
  },
});

const miserable = computed({
  get() {
    return props.modelValue.conditions.miserable;
  },
  set(value: boolean) {
    emits("update:modelValue", {
      ...props.modelValue,
      conditions: {
        ...props.modelValue.conditions,
        miserable: value,
      },
    });
  },
});
const wary = computed({
  get() {
    return props.modelValue.conditions.wary;
  },
  set(value: boolean) {
    emits("update:modelValue", {
      ...props.modelValue,
      conditions: {
        ...props.modelValue.conditions,
        wary: value,
      },
    });
  },
});
const wounded = computed({
  get() {
    return props.modelValue.conditions.wounded;
  },
  set(value: boolean) {
    emits("update:modelValue", {
      ...props.modelValue,
      conditions: {
        ...props.modelValue.conditions,
        wounded: value,
      },
    });
  },
});
const injury = computed({
  get() {
    return props.modelValue.conditions.injury;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      conditions: {
        ...props.modelValue.conditions,
        injury: value,
      },
    });
  },
});
const parryTotal = computed({
  get() {
    return props.modelValue.combat.parry.total;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      combat: {
        ...props.modelValue.combat,
        parry: {
          ...props.modelValue.combat.parry,
          total: value,
        },
      },
    });
  },
});

const parryBase = computed({
  get() {
    return props.modelValue.combat.parry.base;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      combat: {
        ...props.modelValue.combat,
        parry: {
          ...props.modelValue.combat.parry,
          base: value,
        },
      },
    });
  },
});

const parryGear = computed({
  get() {
    return props.modelValue.combat.parry.gear;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      combat: {
        ...props.modelValue.combat,
        parry: {
          ...props.modelValue.combat.parry,
          gear: value,
        },
      },
    });
  },
});
const protectionTotal = computed({
  get() {
    return props.modelValue.combat.protection.total;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      combat: {
        ...props.modelValue.combat,
        protection: {
          ...props.modelValue.combat.protection,
          total: value,
        },
      },
    });
  },
});
const protectionBase = computed({
  get() {
    return props.modelValue.combat.protection.base;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      combat: {
        ...props.modelValue.combat,
        protection: {
          ...props.modelValue.combat.protection,
          base: value,
        },
      },
    });
  },
});
const protectionGear = computed({
  get() {
    return props.modelValue.combat.protection.gear;
  },
  set(value: number) {
    emits("update:modelValue", {
      ...props.modelValue,
      combat: {
        ...props.modelValue.combat,
        protection: {
          ...props.modelValue.combat.protection,
          gear: value,
        },
      },
    });
  },
});
</script>

<template>
  <div class="outer-section">
    <div class="inner-section right-seperator">
      <div class="inner-section">
        <div class="text-section rewards-and-virtues">
          <div class="label">
            <h2>Rewards & Virtues</h2>
          </div>
          <textarea v-model="rewardsAndVirtues"></textarea>
        </div>
      </div>
      <div class="row">
        <Stat v-model="treasure" label="Treasure" />
        <div class="center">
          <Stat v-model="valour" label="Valour" sublabel="Heart TN" />
          <button class="roll-dice" @click="rollForValour">
            <span class="material-symbols-outlined"> casino </span>
          </button>
        </div>
        <div class="center">
          <Stat v-model="wisdom" label="Wisdom" sublabel="Wits TN" />
          <button class="roll-dice" @click="rollForWisdom">
            <span class="material-symbols-outlined"> casino </span>
          </button>
        </div>
      </div>
      <div class="row">
        <Stat v-model="adventurePoints" label="Adventure" sublabel="Points" />
        <Stat v-model="skillPoints" label="Skill" sublabel="Points" />
        <Stat v-model="fellowshipPoints" label="Fellowship" sublabel="Points" />
      </div>
    </div>
    <div class="inner-section">
      <h2>Endurance</h2>
      <div class="row">
        <Stat v-model="enduranceMax" label="Maximum" />
        <Stat v-model="enduranceCurrent" label="Current" type="circle" />
        <Stat v-model="load" label="Load" type="square" />
        <Stat v-model="fatigue" label="Fatigue" type="square" />
      </div>
      <h2>Hope</h2>
      <div class="row">
        <Stat v-model="hopeMax" label="Maximum" />
        <Stat v-model="hopeCurrent" label="Current" type="circle" />
        <Stat v-model="shadow" label="Shadow" type="square" />
        <Stat v-model="scars" label="Scars" type="square" />
      </div>
      <h2>Conditions</h2>
      <div class="row conditions">
        <div class="column">
          <input type="checkbox" v-model="miserable" />
          <div class="condition-label">Miserable</div>
        </div>
        <div class="column">
          <input type="checkbox" v-model="wary" />
          <div class="condition-label">Wary</div>
        </div>
        <div class="column">
          <input type="checkbox" v-model="wounded" />
          <div class="condition-label">Wounded</div>
        </div>
      </div>
      <div class="text-section injury">
        <div class="label">injury</div>
        <input type="text" v-model="injury" />
      </div>
      <div class="row conditions">
        <div class="column right-seperator">
          <Stat v-model="parryTotal" label="Parry" />
          <div class="row">
            <Stat v-model="parryBase" label="base" type="square" />
            <Stat v-model="parryGear" label="shield" type="square" />
          </div>
        </div>
        <div class="column">
          <Stat v-model="protectionTotal" label="Protection" />
          <div class="zero">
            <button class="roll-dice" @click="rollForProtection">
              <span class="material-symbols-outlined"> casino </span>
            </button>
          </div>
          <div class="row">
            <Stat v-model="protectionBase" label="base" type="square" />
            <Stat v-model="protectionGear" label="armor" type="square" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.right-seperator {
  border-right: 1px solid #968b80;
  padding-right: 15px;
}
.zero {
  display: block;
  position: relative;
  left: -8px;
  width: 0;
  height: 0;
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
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.inner-section {
  flex-basis: 50%;
  align-items: center;
  .row {
    justify-content: center;
    gap: 10px;

    &.conditions {
      margin-top: 10px;
      justify-content: space-evenly;

      .condition-label {
        font-weight: bold;
        font-size: 20px;
      }

      input[type="checkbox"] {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.rewards-and-virtues {
  margin-top: 0;
  position: relative;
  top: -20px;
  .label {
    h2 {
      font-size: 26px;
    }
  }
  textarea {
    height: 420px;
  }
}

.injury {
  input[type="text"] {
    width: 300px;
  }
}
</style>
