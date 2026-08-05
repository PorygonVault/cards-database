import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "マタドガス",
    },

    illustrator: "Atsuko Nishida",
    rarity: "Rare",
    category: "Pokemon",
    dexId: [110],
    hp: 80,
    types: ["Grass"],
    stage: "Stage1",

	evolveFrom: {
		ja: "ドガース",
	},

    attacks: [
      {
            cost: ["Grass"],
            name: {
                ja: "こんらんガス",
            },
            effect: {
              ja: "相手をこんらんにする。",
            },
            damage: 10,
      },
      {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "いたいガス",
            },
            effect: {
                ja: "相手のバトルポケモン全員を、それぞれどくにし、相手のベンチポケモン全員に、それぞれ10ダメージ。",
            },
      },
  ],

  variants: [
    {
          type: "normal",
          thirdParty: {
              cardmarket: 784486,
              tcgplayer: 613078,
          },
      },
  ],
  
  retreat: 2,
  weaknesses: [{ type: "Psychic", value: "x2" }],
  resistances: [],
};

export default card;
