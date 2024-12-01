<script setup lang="ts">
import { computed } from "vue";
import { CharacterInfo } from "../services/character";

export type PropType = {
  modelValue: CharacterInfo;
};
export type EmitType = {
  (e: "update:modelValue", value: CharacterInfo): void;
};

const props = defineProps<PropType>();
const emits = defineEmits<EmitType>();

const culture = computed({
  get() {
    return props.modelValue.culture;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      culture: value,
    });
  },
});
const blessing = computed({
  get() {
    return props.modelValue.blessing;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      blessing: value,
    });
  },
});
const curses = computed({
  get() {
    return props.modelValue.curses;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      curses: value,
    });
  },
});
const calling = computed({
  get() {
    return props.modelValue.calling;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      calling: value,
    });
  },
});
const living = computed({
  get() {
    return props.modelValue.living;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      living: value,
    });
  },
});
const patron = computed({
  get() {
    return props.modelValue.patron;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      patron: value,
    });
  },
});
const features = computed({
  get() {
    return props.modelValue.features;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      features: value,
    });
  },
});
const shadow = computed({
  get() {
    return props.modelValue.shadow;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      shadow: value,
    });
  },
});
const flaws = computed({
  get() {
    return props.modelValue.flaws;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      flaws: value,
    });
  },
});
const notes = computed({
  get() {
    return props.modelValue.notes;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      notes: value,
    });
  },
});
const gear = computed({
  get() {
    return props.modelValue.gear;
  },
  set(value: string) {
    emits("update:modelValue", {
      ...props.modelValue,
      gear: value,
    });
  },
});
</script>

<template>
  <h2>Character Info</h2>
  <div class="outer-section">
    <div class="inner-section">
      <div class="text">
        <span>Culture</span>
        <input type="text" v-model="culture" />
      </div>
      <div class="text">
        <span>Blessing</span>
        <input type="text" v-model="blessing" />
      </div>
      <div class="text">
        <span>Curse</span>
        <input type="text" v-model="curses" />
      </div>
      <div class="text">
        <span>Calling</span>
        <input type="text" v-model="calling" />
      </div>
      <div class="text">
        <span>Living</span>
        <input type="text" v-model="living" />
      </div>
      <div class="text">
        <span>Patron</span>
        <input type="text" v-model="patron" />
      </div>
      <div class="text">
        <span>Features</span>
        <input type="text" v-model="features" />
      </div>
      <div class="text">
        <span>Shadow</span>
        <input type="text" v-model="shadow" />
      </div>
      <div class="text">
        <span>Flaws</span>
        <input type="text" v-model="flaws" />
      </div>
    </div>
    <div class="inner-section">
      <div class="text-section">
        <div class="label">notes</div>
        <textarea v-model="notes"></textarea>
      </div>
    </div>
    <div class="inner-section">
      <div class="text-section">
        <div class="label">gear</div>
        <textarea v-model="gear"></textarea>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.text {
  span {
    display: inline-block;
    border-bottom: 2px #968b80 dotted;
    margin-right: 10px;
    font-size: 24px;
    width: 80px;
  }
  input[type="text"] {
    position: relative;
    top: 2.5px;
    font-size: 24px;
    width: 240px;
  }
}
.text-section {
  position: relative;
  top: -55px;
  font-size: 20px;
  height: 100%;
  width: 240px;
  margin-right: 20px;

  textarea {
    width: 100%;
    height: calc(100% - 15px);
  }
}
</style>
