import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "カラサリス",
    },

    illustrator: "Hajime Kusajima",
    rarity: "Rare",
    category: "Pokemon",
    dexId: [266],
    hp: 60,
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
              ja: "このポケモンが、相手のワザによるダメージを受けるとき、このポケモンの持ち主はコインを1回投げオモテなら、そのダメージは「-30) される。",
            },
        },
    ],
          
    attacks: [
      {
            cost: ["Grass"],
            name: {
                ja: "ねばるいと",
            },
            effect: {
              ja: "次の相手の番、このワザを受けた相手はにげるができない。",
            },
            damage: 10,
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784489,
              tcgplayer: 613092,
          },
      },
  ],
  
  retreat: 2,
  weaknesses: [{ type: "Fire", value: "x2" }],
  resistances: [],
};

export default card;
