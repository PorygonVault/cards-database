import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "バクーダ",
    },

    illustrator: "Ken Sugimori",
    rarity: "Rare",
    category: "Pokemon",
    dexId: [323],
    hp: 90,
    types: ["Fire"],
    stage: "Stage1",
  
    evolveFrom: {
        ja: "ドンメル",
    },
  
    attacks: [
      {
            cost: ["Fire", "Colorless"],
            name: {
                ja: "ひのたま",
            },
		  	effect: {
				ja: "相手のベンチポケモン1匹にも、10ダメージ。",
            damage: 20,
      },
      {
            cost: ["Fire", "Fire", "Colorless", "Colorless"],
            name: {
                ja: "ほのおのうず",
            },
            effect: {
                ja: "自分の基本エネルギーを2個トラッシュする。(トラッシュできないなら、このワザは失敗する。)",
            },
            damage: 100,
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784497,
              tcgplayer: 613056,
          },
      },
  ],
  
  retreat: 3,
  weaknesses: [{ type: "Fire", value: "x2"}],
  resistances: [],
};

export default card;
