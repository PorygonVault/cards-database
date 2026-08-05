import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "ドガース",
    },

    illustrator: "Atsuko Nishida",
    rarity: "Common",
    category: "Pokemon",
    dexId: [109],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
      {
            cost: ["Colorless"],
            name: {
                ja: "たいあたり",
            },
            damage: 10,
      },
      {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "すてみタックル",
            },
            effect: {
                ja: "自分にも10ダメージ。",
            },
            damage: 30,
      },
  ],

  variants: [
    {
          type: "normal",
          thirdParty: {
              cardmarket: 784485,
              tcgplayer: 613042,
          },
      },
  ],
  
  retreat: 1,
  weaknesses: [{ type: "Psychic", value: "x2" }],
  resistances: [],
};

export default card;
