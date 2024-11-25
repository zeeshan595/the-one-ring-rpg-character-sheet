import OBR from "@owlbear-rodeo/sdk";
import { ref } from "vue";
import { RollResultWithDiceInfo, testResult } from "./dice";

const OWLBEAR_RODEO_CHANNEL_ID = "owlbear.one-ring-rpg-character-sheet.notify";
const isReady = ref<boolean>(false);

function onInit() {
  isReady.value = true;
}

function onMessageReceived(message: string) {
  window.localStorage.setItem("notification", message);
  OBR.modal.open({
    id: "rodeo.owlbear.example/modal",
    url: "/notification",
    width: 460,
    height: 600,
  });
}

export function sendMessage(message: string) {
  if (!isReady.value) {
    return console.warn("trying to send message when owlbear sdk is not ready");
  }
  OBR.broadcast.sendMessage(OWLBEAR_RODEO_CHANNEL_ID, message, {
    destination: "REMOTE",
  });
}

export async function sendRollNotification() {
  if (!isReady.value) {
    return console.warn("trying to send message when owlbear sdk is not ready");
  }
  const name = await OBR.player.getName();
  sendMessage(
    JSON.stringify({
      ...testResult.value,
      userName: name,
    } as RollResultWithDiceInfo)
  );
}

if (OBR && OBR.isAvailable && !isReady.value) {
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
