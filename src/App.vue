<script setup lang="ts">
import CharacterInfo from "./components/characterInfo.vue";
import CharacterStats from "./components/characterStats.vue";
import Skills from "./components/skills.vue";
import { character } from "./services/character";
import Conditions from "./components/conditions.vue";
import CombatGear from "./components/combatGear.vue";
import TopBar from "./components/top-bar.vue";
import DiceResult from "./components/dice-result.vue";
import PerformRollTest from "./components/perform-roll-test.vue";
import DiceRoller from "./components/dice-roller.vue";
</script>

<template>
  <DiceResult />
  <DiceRoller />
  <PerformRollTest />
  <TopBar />
  <div class="text-section">
    <div class="label">name</div>
    <input class="character-name" type="text" v-model="character.info.name" />
  </div>
  <CharacterInfo v-model="character.info" />
  <CharacterStats v-model="character.stats" />
  <Skills v-model="character.skills" />
  <Conditions v-model="character" />
  <CombatGear v-model="character.combat" />
  <div class="vertical-space"></div>
</template>

<style scoped>
.character-name {
  width: 300px;
}
.vertical-space {
  margin-bottom: 100px;
}
</style>
