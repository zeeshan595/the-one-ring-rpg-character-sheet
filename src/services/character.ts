import { ref } from "vue";

export enum CharacterSkillType {
  Strength = "strength",
  Heart = "heart",
  Wits = "wits",
}

export type CharacterInfo = {
  name: string;
  culture: string;
  blessing: string;
  calling: string;
  living: string;
  patron: string;
  features: string;
  shadow: string;
  flaws: string;
  notes: string;
  gear: string;
  treasure: number;
};
export type Armor = {
  name: string;
  protection: number;
  parry: number;
  load: number;
};
export type Weapon = {
  name: string;
  damage: number;
  injury: [number, number | null];
  load: number;
  notes: string;
};
export type WeaponProficiency = {
  name: string;
  amount: number;
};
export type CombatStat = {
  base: number;
  gear: number;
  total: number;
};
export type CharacterCombat = {
  proficiencies: WeaponProficiency[];
  weapons: Weapon[];
  armor: Armor;
  shield: Armor;
  parry: CombatStat;
  protection: CombatStat;
};
export type CharacterStatInfo = {
  rating: number;
  target: number;
};
export type CharacterStats = {
  strength: CharacterStatInfo;
  heart: CharacterStatInfo;
  wits: CharacterStatInfo;
  valour: number;
  wisdom: number;
};
export type CharacterEndurance = {
  maximum: number;
  current: number;
  load: number;
  fatigue: number;
};
export type CharacterHope = {
  maximum: number;
  current: number;
  shadow: number;
  scars: number;
};
export type CharacterConditions = {
  miserable: boolean;
  wary: boolean;
  wounded: boolean;
  injury: string;
};
export type CharacterPoints = {
  adventure: number;
  skill: number;
  fellowship: number;
};
export type CharacterSkill = {
  name: string;
  favoured: boolean;
  amount: number;
};
export type CharacterSkills = {
  strength: CharacterSkill[];
  heart: CharacterSkill[];
  wits: CharacterSkill[];
};
export type Character = {
  uuid: string;

  info: CharacterInfo;
  stats: CharacterStats;
  skills: CharacterSkills;
  combat: CharacterCombat;

  endurance: CharacterEndurance;
  hope: CharacterHope;

  conditions: CharacterConditions;
  points: CharacterPoints;
  rewardsAndVirtues: string;
};

export function createCharacter(): Character {
  return {
    uuid: "",
    info: {
      name: "",
      culture: "",
      blessing: "",
      calling: "",
      living: "",
      patron: "",
      features: "",
      shadow: "",
      flaws: "",
      notes: "",
      gear: "",
      treasure: 0,
    },
    stats: {
      strength: {
        rating: 0,
        target: 20,
      },
      heart: {
        rating: 0,
        target: 20,
      },
      wits: {
        rating: 0,
        target: 20,
      },
      valour: 0,
      wisdom: 0,
    },
    skills: {
      strength: [
        { name: "Awe", amount: 0, favoured: false },
        { name: "Athletics", amount: 0, favoured: false },
        { name: "Awareness", amount: 0, favoured: false },
        { name: "Hunting", amount: 0, favoured: false },
        { name: "Song", amount: 0, favoured: false },
        { name: "Craft", amount: 0, favoured: false },
      ],
      heart: [
        { name: "Enhearten", amount: 0, favoured: false },
        { name: "Travel", amount: 0, favoured: false },
        { name: "Insight", amount: 0, favoured: false },
        { name: "Healing", amount: 0, favoured: false },
        { name: "Courtesy", amount: 0, favoured: false },
        { name: "Battle", amount: 0, favoured: false },
      ],
      wits: [
        { name: "Persuade", amount: 0, favoured: false },
        { name: "Stealth", amount: 0, favoured: false },
        { name: "Scan", amount: 0, favoured: false },
        { name: "Explore", amount: 0, favoured: false },
        { name: "Riddle", amount: 0, favoured: false },
        { name: "Lore", amount: 0, favoured: false },
      ],
    },
    combat: {
      proficiencies: [
        { name: "Axes", amount: 0 },
        { name: "Bows", amount: 0 },
        { name: "Spears", amount: 0 },
        { name: "Swords", amount: 0 },
        { name: "", amount: 0 },
        { name: "", amount: 0 },
      ],
      weapons: [
        { name: "", damage: 0, injury: [0, null], load: 0, notes: "" },
        { name: "", damage: 0, injury: [0, null], load: 0, notes: "" },
        { name: "", damage: 0, injury: [0, null], load: 0, notes: "" },
        { name: "", damage: 0, injury: [0, null], load: 0, notes: "" },
      ],
      armor: {
        name: "",
        parry: 0,
        protection: 0,
        load: 0,
      },
      shield: {
        name: "",
        parry: 0,
        protection: 0,
        load: 0,
      },
      parry: {
        base: 0,
        gear: 0,
        total: 0,
      },
      protection: {
        base: 0,
        gear: 0,
        total: 0,
      },
    },
    endurance: {
      current: 0,
      fatigue: 0,
      load: 0,
      maximum: 0,
    },
    hope: {
      current: 0,
      maximum: 0,
      scars: 0,
      shadow: 0,
    },
    conditions: {
      miserable: false,
      wary: false,
      wounded: false,
      injury: "",
    },
    points: {
      adventure: 0,
      fellowship: 0,
      skill: 0,
    },
    rewardsAndVirtues: "",
  };
}

export const character = ref<Character>(createCharacter());

const savedCharacter = window.localStorage.getItem("character");
if (savedCharacter) {
  character.value = JSON.parse(savedCharacter);
}
window.setInterval(() => {
  window.localStorage.setItem("character", JSON.stringify(character));
}, 100);
