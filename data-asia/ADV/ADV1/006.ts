import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "アゲハント",
    },

    illustrator: "Hajime Kusajima",
    rarity: "Rare",
    category: "Pokemon",
    dexId: [267],
    hp: 80,
    types: ["Grass"],
    stage: "Stage1",
  
    evolveFrom: {
        ja: "カラサリス",
    },

    abilities: [
      {
        type: "ポケボデー",
        name: {
          ja: "だつりょくりんぶぶん",
        },
        effect: {
          ja: "このポケモンがいるかぎり、おたがいのバトルポケモン全員の抵抗力は、すべてなくなる。",
        },
      },
    ],
  
    attacks: [
      {
            cost: ["Grass"],
            name: {
                ja: "しびれごな",
            },
            effect: {
                ja: "コインを1回投げオモテなら、相手をマヒにする。",
            damage: 20,
      },
      {
            cost: ["Grass", "Colorless", "Colorless"],
            name: {
                ja: "パラレルゲイン",
            },
            effect: {
                ja: "自分のポケモン全員のダメージカウンターを、それぞれ1個ずっとりのぞく。",
            },
            damage: 50,
      },
  ],

  variants: [
    {
          type: "normal",
          thirdParty: {
              cardmarket: 784490,
              tcgplayer: 613054,
          },
      },
  ],
  
  retreat: 0,
  weaknesses: [{ type: "Fire", value: "x2" }],
  resistances: [],
};

export default card;
