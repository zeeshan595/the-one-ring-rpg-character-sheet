import { ref } from "vue";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

export const ALL_DICE = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];
export const testResult = ref<RollResultWithDiceInfo | null>(null);
export const testOptions = ref<{
  favoured: RollFavoured;
  proficiency: number;
  targetNumber: number;
} | null>(null);
export const diceOptions = ref<string[]>([]);
const audio = new Audio("/assets/dice-roll.mp3");
audio.loop = false;

export function buildDiceNotation(dice: string[]) {
  let diceStringBuilder: Map<string, number> = new Map();
  for (const selectedDice of dice) {
    const current = diceStringBuilder.get(selectedDice);
    if (current) {
      diceStringBuilder.set(selectedDice, current + 1);
    } else {
      diceStringBuilder.set(selectedDice, 1);
    }
  }
  let diceString: string[] = [];
  for (const dice of diceStringBuilder.keys()) {
    diceString.push(`${diceStringBuilder.get(dice)}${dice}`);
  }
  return diceString.join(" + ");
}

export function rollDiceUsingNotation(diceNotation: string) {
  const result = new DiceRoll(diceNotation);
  audio.play();
  return result;
}

export enum RollFavoured {
  Normal = "normal",
  Favoured = "favoured",
  IllFavoured = "ill-favoured",
}

export type RollOptions = {
  favoured: RollFavoured;
  proficiency: number;
  targetNumber: number;
  miserable: boolean;
  wary: boolean;
};

export enum SymbolType {
  None = "none",
  EyeOfSauron = "eye-of-sauron",
  GandalfsRune = "gandalfs-rune",
}

export type RollResult = {
  total?: number;
  isSuccessful?: boolean;
  elvishSymbols: number;
  symbol: SymbolType;
  options?: RollOptions;
};

export type RollResultWithDiceInfo = RollResult & {
  output: string;
};

export function makeRollResult(
  featDice: number[],
  successDice: number[],
  options: RollOptions
): RollResult {
  if (options.wary) {
    successDice = successDice.filter((d) => d > 3);
  }
  const critSuccess = featDice.find((d) => d == 12) !== undefined;
  const critFail = featDice.find((d) => d == 11) !== undefined;
  if (options.miserable && critFail) {
    return {
      total: 0,
      isSuccessful: false,
      elvishSymbols: 0,
      symbol: SymbolType.EyeOfSauron,
      options,
    };
  }

  let successes = 0;
  let total = 0;
  let symbol = SymbolType.None;
  switch (options.favoured) {
    case RollFavoured.Favoured:
      // handle special symbol
      if (critSuccess) {
        symbol = SymbolType.GandalfsRune;
      } else if (critFail && featDice == new Array(featDice.length).fill(11)) {
        symbol = SymbolType.EyeOfSauron;
      }
      // get total
      featDice = featDice.filter((d) => d != 11);
      if (featDice.length > 0) {
        const max = Math.max(...featDice);
        if (max == 12) {
          total = 20;
        } else {
          total += max;
        }
      }
      break;
    case RollFavoured.Normal:
      // handle special symbol
      if (critSuccess) {
        symbol = SymbolType.GandalfsRune;
      } else if (critFail) {
        symbol = SymbolType.EyeOfSauron;
      }

      // get total
      if (featDice.length > 0) {
        if (featDice[0] != 11) {
          if (featDice[0] == 12) {
            total = 20;
          } else {
            total += featDice[0];
          }
        }
      }
      break;
    case RollFavoured.IllFavoured:
      // handle special symbol
      if (critFail) {
        symbol = SymbolType.EyeOfSauron;
      } else if (
        critSuccess &&
        featDice == new Array(featDice.length).fill(12)
      ) {
        symbol = SymbolType.GandalfsRune;
      }

      // get total
      if (!featDice.find((d) => d == 11)) {
        total += Math.min(...featDice);
      }
      break;
  }
  for (const die of successDice) {
    total += die;
    if (die == 6) successes++;
  }

  return {
    total,
    isSuccessful: total >= options.targetNumber,
    elvishSymbols: successes,
    symbol,
    options,
  };
}

export function makeRoll(options: RollOptions) {
  let notation = "";
  switch (options.favoured) {
    default:
    case RollFavoured.Normal:
      notation = "1d12";
      break;
    case RollFavoured.Favoured:
      notation = "2d12";
      break;
    case RollFavoured.IllFavoured:
      notation = "2d12";
      break;
  }
  if (options.proficiency > 0) {
    notation += ` + ${options.proficiency}d6`;
  }
  const rollResult = rollDiceUsingNotation(notation);
  const featDiceResult: number[] = [];
  for (const roll of (rollResult.rolls[0] as any)["rolls"]) {
    featDiceResult.push(roll.value);
  }

  const successDiceResult: number[] = [];
  if (rollResult.rolls.length > 2) {
    for (const roll of (rollResult.rolls[2] as any)["rolls"]) {
      successDiceResult.push(roll.value);
    }
  }
  const result = makeRollResult(featDiceResult, successDiceResult, options);
  testResult.value = {
    ...result,
    output: rollResult.output,
  };
}
