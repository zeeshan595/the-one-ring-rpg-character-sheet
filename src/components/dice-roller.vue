<script setup lang="ts">
import {
  ALL_DICE,
  buildDiceNotation,
  diceOptions,
  rollDiceUsingNotation,
  SymbolType,
  testResult,
} from "../services/dice";

function clearSelectedDice() {
  diceOptions.value = [];
}

function rollDice() {
  const notation = buildDiceNotation(diceOptions.value);
  const result = rollDiceUsingNotation(notation);
  testResult.value = {
    symbol: SymbolType.None,
    elvishSymbols: 0,
    output: result.output,
  };
  diceOptions.value = [];
}
</script>

<template>
  <div class="dice-roller" v-if="diceOptions.length > 0">
    <div class="content">
      <template v-for="dice in ALL_DICE">
        <template v-if="diceOptions.includes(dice)">
          <span>{{ diceOptions.filter((d) => d == dice).length }}x</span>
          <img class="dice" :src="`/assets/dice/${dice}.png`" :alt="dice" />
        </template>
      </template>
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

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;

    .dice {
      height: 50px;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
</style>
