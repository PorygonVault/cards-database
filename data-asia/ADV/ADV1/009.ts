import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "キノココ",
    },

    illustrator: "Atsuko Nishida",
    rarity: "Common",
    category: "Pokemon",
    dexId: [285],
    hp: 40,
    types: ["Grass"],
    stage: "Basic",
  
    attacks: [
      {
            cost: ["Colorless"],
            name: {
                ja: "相手をねむりにする。",
            },
            damage: 10,
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784493,
              tcgplayer: 613048,
          },
      },
  ],
  
  retreat: 1,
  weaknesses: [{type: "Fire", value "x2" }],
  resistances: [{ type: "Water", value: "-30" }],
};

export default card;
