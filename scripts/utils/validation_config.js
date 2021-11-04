exports.arrayFields = ["weapons", "armor", "race"];
exports.scalarFields = ["is_painted", "slug"];
exports.deprecatedFields = ["title", "paints", "layout"];

exports.invalidValues = {
  slug: [undefined],
};

exports.deprecatedValues = {
  weapons: [null],
  armor: [null],
  race: [null],
};

exports.validValues = {
  weapons: [
    "axe",
    "book",
    "bow",
    "chain weapon",
    "claw",
    "crossbow",
    "dagger",
    "grenade",
    "hammer",
    "instrument",
    "lance",
    "mace",
    "natural weapons",
    "pistol",
    "polearm",
    "rifle",
    "rocket pack",
    "scroll",
    "spear",
    "spell effect",
    "staff",
    "standard",
    "sword",
    "sword-staff",
  ],
  armor: ["cloak", "clothing", "leather", "mail", "plate", "powered armor", "robes", "shield"],
  race: [
    "cat",
    "dragonspawn",
    "dwarf",
    "elf",
    "goblin",
    "golem",
    "half-orc",
    "halfling",
    "human",
    "lizardman",
    "ogre",
    "stonechild",
    "troll",
    "warjack",
  ],
  is_painted: ["prepainted", "unpainted", "wip", "painted", undefined],
};
