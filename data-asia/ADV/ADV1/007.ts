import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "マユルド",
    },

    illustrator: "Midori Harada",
    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [268],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",
  
    evolveFrom: {
        ja: "ケムッソ",
    },

    abilities: [
      {
        type: "ポケボディー",
        name: {
          ja: "まゆのから",
        },
        effect: {
          ja: "このポケモンが、相手のワザによるダメージを受けるとき、このポケモンの持ち主はコインを1回投げオモテなら、そのダメージは「-30」 される。",
        },
      },
    ],
  
    attacks: [
      {
            cost: ["Grass"],
            name: {
                ja: "どくのいと",
            },
            effect: {
                ja: "相手をどくにする。",
            },
      },
  ],

  variants: [
    {
          type: "normal",
          thirdParty: {
              cardmarket: 784491,
              tcgplayer: 613086,
          },
      },
  ],
  
  retreat: ,
  weaknesses: [{ type: "Fire", Value: "x2"}],
  resistances: [],
};

export default card;
