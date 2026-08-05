import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "ドクケイル",
    },

    illustrator: "Midori Harada",
    rarity: "Rare",
    category: "Pokemon",
    dexId: [269],
    hp: 90,
    types: ["Grass"],
    stage: "Stage2",
  
    evolveFrom: {
        ja: "マユルド",
    },

    abilities: [
      {
        type: "ポケボディー",
        name: {
          ja: "まもりのりんぶん",
        },
        effect: {
          ja: "このポケモンは、相手のワザによる効果を受けない。",
        },
      },
    ],
  
    attacks: [
      {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "どくどく",
            },
            effect: {
				ja: "相手をどくにする。このワザでどくになったポケモンは、ポケモンチェックのときにのせるどくのダメージカウンターの数が 2個になる。",
			},
      },
      {
            cost: ["Grass", "Colorless", "Colorless"],
            name: {
                ja: "かぜおこし",
            },
            damage: 50,
      },
  ],

  variants: [
    {
          type: "Normal",
          thirdParty: {
              cardmarket: 784492,
              tcgplayer: 613058,
          },
      },
  ],
  
  retreat: ,
  weaknesses: [{ type:"Psychic", value:"x2"}],
  resistances: [],
};

export default card;
