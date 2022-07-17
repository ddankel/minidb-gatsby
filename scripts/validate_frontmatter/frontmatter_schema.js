const deprecatedValues = {
  weapons: [null],
  armor: [null],
  race: ["lizardman", "cat"],
};

const validValues = {
  weapons: [
    "axe",
    "book",
    "bow",
    "chain weapon",
    "claw",
    "club",
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
    "scythe",
    "spear",
    "spell effect",
    "staff",
    "standard",
    "sword",
    "sword-staff",
  ],
  armor: ["cloak", "clothing", "leather", "mail", "plate", "powered armor", "robe", "shield"],
  race: [
    "draconian",
    "dragonspawn",
    "dwarf",
    "elf",
    "goblin",
    "golem",
    "half-orc",
    "halfling",
    "human",
    "lizardfolk",
    "lupine",
    "obsidiman",
    "ogre",
    "stonechild",
    "tabaxi",
    "t'skrang",
    "troll",
    "undead",
    "unknown",
    "warjack",
  ],
  status: ["prepainted", "unpainted", "wip", "painted", "unassembled", undefined],
};

/**
 * Frontmatter Schemma
 *
 * @options
 *  - type: 'scalar' or 'array'
 *  - required: true or false (default: true)
 *  - values: If present only values in this array are allowed
 *  - deprecatedValues: If present, values in this array will cause deprecation warnings
 *  - depreacted: If true, this field's presence will raise deprecation warnings (default false)
 *  - validate: a optional function that accepts a value and returns if it is valid or not for custom validations
 *
 *
 */
const schema = [
  {
    key: "slug",
    type: "scalar",
  },
  {
    key: "name",
    type: "scalar",
  },
  {
    key: "sku",
    type: "scalar",
    required: false,
  },
  {
    key: "line",
    type: "array",
  },
  {
    key: "painted",
    type: "scalar",
    required: false,
  },
  {
    key: "status",
    type: "scalar",
    required: false,
    values: validValues.status,
    deprecatedValues: deprecatedValues.status,
  },
  {
    key: "photos",
    type: "array",
    validate(value) {
      return value.startsWith(".");
    },
  },
  {
    key: "weapons",
    type: "array",
    values: validValues.weapons,
    deprecatedValues: deprecatedValues.weapons,
    required: false,
  },
  {
    key: "armor",
    type: "array",
    values: validValues.armor,
    deprecatedValues: deprecatedValues.armor,
    required: false,
  },
  {
    key: "race",
    type: "array",
    values: validValues.race,
    deprecatedValues: deprecatedValues.race,
  },
  {
    key: "quantity",
    type: "scalar",
    required: false,
    validate(value) {
      return value === undefined || Number.isInteger(value);
    },
  },
  {
    key: "recipes",
    type: "array",
    required: false,
  },
];

module.exports = schema;
