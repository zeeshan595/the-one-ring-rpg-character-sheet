<script setup lang="ts">
import { testOptions, makeRoll, RollFavoured } from "../services/dice";
import Stat from "./stat.vue";
import { character } from "../services/character";

function clearSelectedDice() {
  testOptions.value = null;
}

function rollDice() {
  if (!testOptions.value) return;
  makeRoll({
    favoured: testOptions.value.favoured,
    proficiency: testOptions.value.proficiency,
    targetNumber: testOptions.value.targetNumber,
    miserable: character.value.conditions.miserable,
    wary: character.value.conditions.wary,
  });
  testOptions.value = null;
}
</script>

<template>
  <div class="dice-roller" v-if="testOptions != null">
    <div class="options">
      <h2>Target Number</h2>
      <Stat v-model="testOptions.targetNumber" label="" />
      <h2>Proficiency</h2>
      <Stat v-model="testOptions.proficiency" label="" />
      <h2>Favoured</h2>
      <select v-model="testOptions.favoured">
        <option :value="RollFavoured.Normal">Normal</option>
        <option :value="RollFavoured.Favoured">Favoured</option>
        <option :value="RollFavoured.IllFavoured">Ill-Favoured</option>
      </select>
    </div>
    <div class="buttons">
      <button @click="clearSelectedDice">Clear</button>
      <button @click="rollDice">Roll</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dice-roller {
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 200px;
  left: calc(50% - 210px);
  border: 3px #b0232e dotted;
  background-color: #fffdee;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  z-index: 100;
  padding: 20px 10px;
  gap: 20px;

  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
</style>
