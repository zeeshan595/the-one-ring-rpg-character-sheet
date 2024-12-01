<script lang="ts" setup>
import { ref } from "vue";
import { ALL_DICE, diceOptions } from "../services/dice";
import { character, createCharacter } from "../services/character";

const scrollPosition = ref<number>(document.documentElement.scrollTop);
setInterval(
  () => (scrollPosition.value = document.documentElement.scrollTop),
  1
);

function addDiceToSelectedDice(dice: string) {
  diceOptions.value.push(dice);
}
function removeDiceFromSelectedDice(e: MouseEvent, dice: string) {
  e.preventDefault();
  const index = diceOptions.value.findIndex((d) => d === dice);
  if (index == -1) return;
  diceOptions.value = [
    ...diceOptions.value.slice(0, index),
    ...diceOptions.value.slice(index + 1, diceOptions.value.length),
  ];
}
function save() {
  const data = JSON.stringify(character.value);
  const file = new File([data], `character.json`, { type: "text/json" });
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = URL.createObjectURL(file);
  link.download = file.name;
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  }, 0);
}
function load() {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", ".json");
  input.style.display = "none";
  document.body.appendChild(input);

  input.onchange = function () {
    if (!input.files) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      if (!event.target) return;
      const data = event.target.result as string;
      if (!data) return;
      document.body.removeChild(input);
      const rawData = JSON.parse(data);
      character.value = {
        ...createCharacter(),
        ...rawData,
      };
    });
    reader.readAsText(file);
  };
  input.onabort = function () {
    document.body.removeChild(input);
  };
  input.oncancel = function () {
    document.body.removeChild(input);
  };
  input.click();
}
function clear() {
  character.value = createCharacter();
}
</script>

<template>
  <div class="topbar" :class="{ lift: scrollPosition > 0 }">
    <button @click="load">load</button>
    <button @click="save">save</button>
    <button @click="clear">clear</button>
    <div class="expand"></div>
    <template v-for="dice in ALL_DICE">
      <img
        class="dice"
        :src="`/assets/dice/${dice}.png`"
        :alt="dice"
        @click="addDiceToSelectedDice(dice)"
        @contextmenu="(e) => removeDiceFromSelectedDice(e, dice)"
      />
    </template>
  </div>
</template>

<style lang="css" scoped>
.topbar {
  display: flex;
  position: sticky;
  top: 10px;
  gap: 10px;
  height: 50px;
  padding: 10px;
  border: 3px #b0232e dotted;
  background-color: #fffdee;
  z-index: 100;
  transition: 0.3s;
  &.lift {
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);
  }

  .expand {
    display: flex;
    flex-grow: 1;
  }
  .dice {
    display: flex;
    height: 50px;
    cursor: pointer;
  }
}
</style>
