import { Card } from "../../../interfaces";
import Set from "../ADV1";

const card: Card = {
    set: Set,
    name: {
        ja: "ドンメル",
    },

    illustrator: "Ken Sugimori",
    rarity: "Common",
    category: "Pokemon",
    dexId: [322],
    hp: 30,
    types: ["Fire"],
    stage: "Basic",
  
    attacks: [
      {
            cost: ["Colorless"],
            name: {
                ja: "ずつき",
            },
            damage: 10,
      },
      {
            cost: ["Fire", "Colorless"],
            name: {
                ja: "まるやき",
            },
            effect: {
                ja: "コインを1回投げオモテなら、相手のバトルポケモン全員を、 それぞれやけどにする。",
            },
      },
  ],

  variants: [
    {
          type: "normal",
          thirdparty: {
              cardmarket: 784496,
              tcgplayer: 613044,
          },
      },
  ],
  
  retreat: ,
  weaknesses: [{ type: "Water", value: "x2" }],
  resistances: [],
};

export default card;
