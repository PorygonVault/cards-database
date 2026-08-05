import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "ケムッソ",
    },

    illustrator: "Hajime Kusajima",
    rarity: "Common",
    category: "Pokemon",
    dexId: [265],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
      {
            cost: ["Colorless"],
            name: {
                ja: "しんかのきざし",
            },
            effect: {
              ja: "自分の山札から、「カラサリス」と「アゲハント」、または 「マユルド」と「ドクケイル」を、それぞれ1枚ずつ選び出し、 相手プレイヤーに見せてから、手札に加える。その後、その山札を切る。",
            },
      },
      {
            cost: ["Grass"],
            name: {
                ja: "どくのトゲ",
            },
            effect: {
                ja: "相手をどくにする。",
            },
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784488,
              tcgplayer: 613051,
          },
      },
  ],
  
  retreat: 3,
  weaknesses: [{ type: "Fire", value: "x2" }],
  resistances: [],
};

export default card;
