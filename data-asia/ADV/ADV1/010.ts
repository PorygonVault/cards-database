import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "キノガッサ",
    },

    illustrator: "Ken Sugimori",
    rarity: "Rare",
    category: "POkemon",
    dexId: [286],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",
  
    evolveFrom: {
        ja: "キノココ",
    },
  
    attacks: [
      {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "ずつき",
            },
            damage: 20,
      },
      {
            cost: ["Grass", "Colorless", "Colorless"],
            name: {
                ja: "バトルブラスト",
            },
            effect: {
                ja: "自分の闘エネルギーの数×10ダメージを追加する。",
            },
            damage: "40+",
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784494,
              tcgplayer: 613067,
          },
      },
  ],
  
  retreat: 1,
  weaknesses: [{ type: "Fire", value: "x2" }],
  resistances: [],
};

export default card;
