import OBR from "@owlbear-rodeo/sdk";
import { ref } from "vue";

const OWLBEAR_RODEO_CHANNEL_ID = "owlbear.one-ring-rpg-character-sheet.notify";
const isReady = ref<boolean>(false);

function onInit() {
  isReady.value = true;
}

function onMessageReceived(message: string) {
  OBR.notification.show(message);
}

export function sendMessage(message: string) {
  if (!isReady.value) {
    return console.warn("trying to send message when owlbear sdk is not ready");
  }
  OBR.broadcast.sendMessage(OWLBEAR_RODEO_CHANNEL_ID, message, {
    destination: "REMOTE",
  });
}

if (OBR && OBR.isAvailable) {
  OBR.onReady(() => {
    onInit();

    OBR.broadcast.onMessage(OWLBEAR_RODEO_CHANNEL_ID, (event) => {
      if (typeof event.data === "string") {
        onMessageReceived(event.data);
      } else {
        console.warn(
          "unknown message received by the one ring rpg character sheet"
        );
      }
    });
  });
}
