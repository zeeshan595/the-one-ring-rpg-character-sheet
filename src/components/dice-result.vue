<script setup lang="ts">
import { testResult, SymbolType } from "../services/dice";

function close() {
  testResult.value = null;
}
</script>

<template>
  <div class="dice-roller" v-if="testResult != null">
    <div class="content">
      <h2 class="target-number" v-if="testResult.options">
        TN {{ testResult.options.targetNumber }}
      </h2>
      <span v-if="testResult.total != undefined">
        Got {{ testResult.total }}
      </span>
      <span class="result success" v-if="testResult.isSuccessful == true">
        Success!
      </span>
      <span class="result fail" v-if="testResult.isSuccessful == false">
        Failed!
      </span>
      <template v-if="testResult.symbol == SymbolType.GandalfsRune">
        <img class="symbol" src="/assets/gandalf.png" alt="gandalf" />
        <span class="symbol-label">Gandalf's Rune</span>
      </template>
      <template v-if="testResult.symbol == SymbolType.EyeOfSauron">
        <img class="symbol" src="/assets/eye.png" alt="eye" />
        <span class="symbol-label">Eye Of Sauron</span>
      </template>
      <template v-if="testResult.elvishSymbols > 0">
        <div class="elvish-symbols">
          <img
            v-for="_ in testResult.elvishSymbols"
            src="/assets/elf.png"
            alt="elf"
          />
        </div>
        <span class="symbol-label">Elvish Symbols</span>
      </template>
      <h2>Result</h2>
      <span>{{ testResult.output }}</span>
    </div>
    <div class="buttons">
      <button @click="close">Close</button>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .result {
      font-size: 42px;

      &.success {
        color: green;
      }

      &.fail {
        color: #b0232e;
      }
    }
    .symbol {
      height: 50px;
      margin-bottom: 10px;
    }
    .elvish-symbols {
      display: block flex;
      gap: 10px;

      img {
        height: 30px;
      }
    }
  }

  .dice-selected {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      .dice {
        height: 30px;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
</style>
