import { createRouter, createWebHistory } from "vue-router";
import Notification from "./views/Notification.vue";
import CharacterSheet from "./views/CharacterSheet.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: CharacterSheet },
    { path: "/notification", component: Notification },
  ],
});
