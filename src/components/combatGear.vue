<script setup lang="ts">
import { computed } from "vue";
import {
  Armor,
  CharacterCombat,
  Weapon,
  WeaponProficiency,
} from "../services/character";
import Proficiency from "./proficiency.vue";

export type PropType = {
  modelValue: CharacterCombat;
};

export type EmitType = {
  (e: "update:modelValue", value: CharacterCombat): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();

const proficiency = computed({
  get() {
    return props.modelValue.proficiencies;
  },
  set(value: WeaponProficiency[]) {
    emits("update:modelValue", {
      ...props.modelValue,
      proficiencies: value,
    });
  },
});
const armor = computed({
  get() {
    return props.modelValue.armor;
  },
  set(value: Armor) {
    emits("update:modelValue", {
      ...props.modelValue,
      armor: value,
    });
  },
});
const shield = computed({
  get() {
    return props.modelValue.shield;
  },
  set(value: Armor) {
    emits("update:modelValue", {
      ...props.modelValue,
      shield: value,
    });
  },
});
const weapons = computed({
  get() {
    return props.modelValue.weapons;
  },
  set(value: Weapon[]) {
    emits("update:modelValue", {
      ...props.modelValue,
      weapons: value,
    });
  },
});
</script>

<template>
  <div class="outer-section">
    <div class="inner-section right-seperator">
      <h2>Weapon Proficiencies</h2>
      <template v-for="n in 6">
        <Proficiency v-model="proficiency[n - 1]" />
      </template>
    </div>
    <div class="inner-section right-seperator">
      <h2>Armour</h2>
      <div class="row armor">
        <div class="name">name</div>
        <div class="shield">protection</div>
        <div class="load">load</div>
      </div>
      <div class="row armor margin-bttom">
        <input class="name" type="text" v-model="armor.name" />
        <input class="shield" type="number" v-model="armor.protection" />
        <input class="load" type="number" v-model="armor.load" />
      </div>
      <h2>Shield</h2>
      <div class="row armor">
        <div class="name">name</div>
        <div class="shield">parry</div>
        <div class="load">load</div>
      </div>
      <div class="row armor">
        <input class="name" type="text" v-model="shield.name" />
        <input class="shield" type="number" v-model="shield.parry" />
        <input class="load" type="number" v-model="shield.load" />
      </div>
    </div>
  </div>
  <div class="weapons">
    <h2>Weapons</h2>
    <div class="row weapons-row">
      <div class="name">name</div>
      <div class="damage">damage</div>
      <div class="injury">injury</div>
      <div class="load">load</div>
      <div class="notes">notes</div>
    </div>
    <template v-for="n in 4">
      <div class="row weapons-row">
        <div class="name">
          <input type="text" v-model="weapons[n - 1].name" />
        </div>
        <div class="damage">
          <input type="text" v-model="weapons[n - 1].damage" />
        </div>
        <div class="injury">
          <input type="text" v-model="weapons[n - 1].injury" />
        </div>
        <div class="load">
          <input type="text" v-model="weapons[n - 1].load" />
        </div>
        <div class="notes">
          <input type="text" v-model="weapons[n - 1].notes" />
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="css" scoped>
.inner-section {
  text-align: center;
}
.armor {
  gap: 20px;
  &.margin-bttom {
    margin-bottom: 20px;
  }

  div {
    font-size: 24px;
  }
  .name {
    width: 280px;
  }
  .shield {
    width: 120px;
  }
  .load {
    width: 50px;
  }
}

.weapons {
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  width: 100%;

  .weapons-row {
    flex-basis: 100%;
    font-size: 24px;
    gap: 20px;

    .name {
      width: 300px;
      input {
        width: 300px;
      }
    }
    .damage {
      width: 50px;
      input {
        width: 50px;
      }
    }
    .injury {
      width: 100px;
      input {
        width: 100px;
      }
    }
    .load {
      width: 50px;
      input {
        width: 50px;
      }
    }
    .notes {
      width: 300px;
      input {
        width: 300px;
      }
    }
  }
}
</style>
