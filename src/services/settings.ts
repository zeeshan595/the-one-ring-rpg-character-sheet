import { ref } from "vue";

export const useLargeFont = ref<boolean>(false);

const savedSettings = window.localStorage.getItem("settings");
if (savedSettings) {
  const raw = JSON.parse(savedSettings);
  useLargeFont.value = raw["useLargeFont"] === "1";
}
window.setInterval(() => {
  window.localStorage.setItem(
    "settings",
    JSON.stringify({
      useLargeFont: useLargeFont.value ? "1" : "0",
    })
  );
}, 1000);
