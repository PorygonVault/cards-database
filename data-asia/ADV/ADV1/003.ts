import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "ジュカイン",
    },

    illustrator: "Midori Harada",
    rarity: "Holo",
    category: "Pokemon",
    dexId: [254],
    hp: 120,
    types: ["Grass"],
    stage: "Stage2",
  
    evolveFrom: {
        ja: "ジュプトル"
    },

    attacks: [
      {
            cost: ["Colorless"],
            name: {
                ja: "とかげどく",
            },
            effect: {
              ja: "自分についているエネルギーが1個なら、相手をねむりにする。 2個なら相手をどくにする。3個なら相手をどくとねむりにする。4個以上なら、相手をどくとやけどとねむりにする。",
            },
            damage: 20,
      },
      {
            cost: ["Grass", "Grass", "Colorless", "Colorless", "Colorless"],
            name: {
                ja: "ソーラービーム",
            },
            damage: 70,
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784487,
              tcgplayer: 613063,
          },
      },
  ],
  
  retreat: 3,
  weaknesses: [{ type: "Fire", value: "x2" }],
  resistances: [{ type: "Water", value: "-30" }],
};

export default card;
