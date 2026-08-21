import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "バシャーモ",
    },

    illustrator: "Kouki Saitou",
    rarity: "Rare",
    category: "Pokemon",
    dexId: [257],
    hp: 100,
    types: ["Fire"],
    stage: "Stage2",
  
    evolveFrom: {
        ja: "ワカシャモ",
    },

    abilities: [
      {
        type: "ポケパワー",
        name: {
          ja: "たきつける",
        },
        effect: {
          ja: "このパワーは、自分の番に1回使うことができる。自分のトラッシュからもエネルギーを1枚選び出し、自分のベンチポケモンにつける。 このポケモンが特殊状態なら、このパワーを使うことはできない。",
        },
      },
    ],
  
    attacks: [
      {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                ja: "ファイヤーストリーム",
            },
            effect: {
                ja: "自分のエネルギーを1個トラッシュし、相手のベンチポケモン全員にも、それぞれ10ダメージ。",
            },
            damage: 50,
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784495,
              tcgplayer: 613055,
          },
      },
  ],
  
  retreat: 2,
  weaknesses: [{ type: "Water", value: "x2" }],
  resistances: [],
};

export default card;
