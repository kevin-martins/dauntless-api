"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.islands = void 0;
exports.islands = [
    {
        name: "Emberthorn Cove",
        icon: "Island_Icon_001.webp",
        level: {
            min: 1,
            max: 2,
        },
        behemoths: [
            {
                name: "Lesser Embermane",
                guaranteed: true,
            },
        ],
        gatherables: [
            {
                name: "Ironthistle",
                type: "Flower",
                rarity: "Common",
            },
        ],
        events: null,
        discoveries: [
            {
                name: "Aetheric Meteorite",
            },
        ],
    },
    {
        name: "Boreal Outpost",
        icon: "Island_Icon_002.webp",
        level: {
            min: 1,
            max: 3,
        },
        behemoths: [
            {
                name: "Lesser Boreus",
                guaranteed: true,
            },
            {
                name: "Lesser Gnasher",
                guaranteed: false,
            },
        ],
        gatherables: [
            {
                name: "Heart Lily",
                type: "Flower",
                rarity: "Common",
            },
            {
                name: "Skybloom",
                type: "Flower",
                rarity: "Uncommon",
            },
        ],
        events: null,
        discoveries: [
            {
                name: "That Snow Battlefield",
            },
        ],
    },
    {
        name: "Revelation Rock",
        icon: "Island_Icon_003.webp",
        level: {
            min: 2,
            max: 4,
        },
        behemoths: [
            {
                name: "Lesser Quillshot",
                guaranteed: true,
            },
            {
                name: "Lesser Gnasher",
                guaranteed: false,
            },
            {
                name: "Gnasher",
                guaranteed: false,
            },
            {
                name: "Lesser Boreus",
                guaranteed: false,
            },
            {
                name: "Boreus",
                guaranteed: false,
            },
        ],
        gatherables: [
            {
                name: "Ironthistle",
                type: "Flower",
                rarity: "Common",
            },
            {
                name: "Slayer's Boon",
                type: "Flower",
                rarity: "Uncommon",
            },
            {
                name: "Dashleaf",
                type: "Flower",
                rarity: "Rare",
            },
        ],
        events: [
            {
                name: "Aether Surge",
                description: "Aether surges are a common occurrence across the Hunting Grounds, attracting powerful Behemoths and other hostile creatures.",
            },
        ],
        discoveries: [
            {
                name: "That Snow Battlefield",
            },
        ],
    },
    {
        name: "Restless Sands",
        icon: "Island_Icon_004.webp",
        level: {
            min: 3,
            max: 5,
        },
        behemoths: [
            {
                name: "Lesser Drask",
                guaranteed: true,
            },
            {
                name: "Lesser Embermane",
                guaranteed: false,
            },
            {
                name: "Lesser Quillshot",
                guaranteed: false,
            },
            {
                name: "Quillshot",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Iron Falls",
        icon: "Island_Icon_003.webp",
        level: {
            min: 4,
            max: 6,
        },
        behemoths: [
            {
                name: "Skarn",
                guaranteed: true,
            },
            {
                name: "Boreus",
                guaranteed: false,
            },
            {
                name: "Gnasher",
                guaranteed: false,
            },
            {
                name: "Quillshot",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Sunderstone",
        icon: "Island_Icon_004.webp",
        level: {
            min: 5,
            max: 8,
        },
        behemoths: [
            {
                name: "Charrogg",
                guaranteed: true,
            },
            {
                name: "Embermane",
                guaranteed: false,
            },
            {
                name: "Skarn",
                guaranteed: false,
            },
            {
                name: "Quillshot",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Aulric's Peak",
        icon: "Island_Icon_005.webp",
        level: {
            min: 6,
            max: 9,
        },
        behemoths: [
            {
                name: "Shrike",
                guaranteed: true,
            },
            {
                name: "Drask",
                guaranteed: false,
            },
            {
                name: "Boreus",
                guaranteed: false,
            },
            {
                name: "Ragetail Gnasher",
                guaranteed: false,
            },
            {
                name: "Gnasher",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Frostmarch",
        icon: "Island_Icon_002.webp",
        level: {
            min: 7,
            max: 10,
        },
        behemoths: [
            {
                name: "Pangar",
                guaranteed: true,
            },
            {
                name: "Deadfrost Boreus",
                guaranteed: false,
            },
            {
                name: "Deepfrost Skarn",
                guaranteed: false,
            },
            {
                name: "Deadeye Quillshot",
                guaranteed: false,
            },
            {
                name: "Sporestruck Charrogg",
                guaranteed: false,
            },
            {
                name: "Deepfrost Gnasher",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Fortune's Folly",
        icon: "Island_Icon_002.webp",
        level: {
            min: 9,
            max: 12,
        },
        behemoths: [
            {
                name: "Kharabak",
                guaranteed: true,
            },
            {
                name: "Sporestruck Charrogg",
                guaranteed: false,
            },
            {
                name: "Frostback Pangar",
                guaranteed: false,
            },
            {
                name: "Moonreaver Shrike",
                guaranteed: false,
            },
            {
                name: "Deadeye Quillshot",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Brightwood",
        icon: "Island_Icon_001.webp",
        level: {
            min: 10,
            max: 13,
        },
        behemoths: [
            {
                name: "Sahvyt",
                guaranteed: true,
            },
            {
                name: "Flameborn Quillshot",
                guaranteed: false,
            },
            {
                name: "Bloodfire Embermane",
                guaranteed: false,
            },
            {
                name: "Embermane",
                guaranteed: false,
            },
            {
                name: "Nayzaga",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Conundrum Rocks",
        icon: "Island_Icon_Radiant_Small.webp",
        level: {
            min: 10,
            max: 13,
        },
        behemoths: [
            {
                name: "Valomyr",
                guaranteed: true,
            },
            {
                name: "Lightbound Boreus",
                guaranteed: false,
            },
            {
                name: "Firebrand Charrogg",
                guaranteed: false,
            },
            {
                name: "Moonreaver Shrike",
                guaranteed: false,
            },
            {
                name: "Ragetail Gnasher",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Coldrunner Key",
        icon: "Island_Icon_002.webp",
        level: {
            min: 11,
            max: 14,
        },
        behemoths: [
            {
                name: "Frostwülf",
                guaranteed: true,
            },
            {
                name: "Ragetail Gnasher (Heroic)",
                guaranteed: false,
            },
            {
                name: "Frostback Pangar",
                guaranteed: false,
            },
            {
                name: "Skraev",
                guaranteed: false,
            },
            {
                name: "Sahvyt",
                guaranteed: false,
            },
            {
                name: "Kaltauga",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "The Snowblind Waste",
        icon: "Island_Icon_002.webp",
        level: {
            min: 12,
            max: 15,
        },
        behemoths: [
            {
                name: "Riftstalker",
                guaranteed: true,
            },
            {
                name: "Shadowtouched Nayzaga",
                guaranteed: false,
            },
            {
                name: "Winterhorn Skraev",
                guaranteed: false,
            },
            {
                name: "Shockjaw Nayzaga (Heroic)",
                guaranteed: false,
            },
            {
                name: "Deadeye Quillshot (Heroic)",
                guaranteed: false,
            },
            {
                name: "Deepfrost Gnasher",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Undervald Defile",
        icon: "Island_Icon_003.webp",
        level: {
            min: 13,
            max: 16,
        },
        behemoths: [
            {
                name: "Koshai",
                guaranteed: true,
            },
            {
                name: "Riftstalker",
                guaranteed: false,
            },
            {
                name: "Shadowtouched Drask",
                guaranteed: false,
            },
            {
                name: "Firebrand Charrogg (Heroic)",
                guaranteed: false,
            },
            {
                name: "Razorwing Kharabak",
                guaranteed: false,
            },
            {
                name: "Fenroar",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Cape Fury",
        icon: "Island_Icon_006.webp",
        level: {
            min: 14,
            max: 17,
        },
        behemoths: [
            {
                name: "Stormclaw",
                guaranteed: true,
            },
            {
                name: "Sahvyt",
                guaranteed: false,
            },
            {
                name: "Shadowtouched Koshai",
                guaranteed: false,
            },
            {
                name: "Dreadfrost Boreus (Heroic)",
                guaranteed: false,
            },
            {
                name: "Deepfrost Skarn",
                guaranteed: false,
            },
            {
                name: "Thunderdeep Drask",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Hades Reach",
        icon: "Island_Icon_004.webp",
        level: {
            min: 15,
            max: 18,
        },
        behemoths: [
            {
                name: "Hellion",
                guaranteed: true,
            },
            {
                name: "Valomyr (Heroic)",
                guaranteed: false,
            },
            {
                name: "Razorwing Kharabak (Heroic)",
                guaranteed: false,
            },
            {
                name: "Rockfall Skarn (Heroic)",
                guaranteed: false,
            },
            {
                name: "Bloodfire Embermane (Heroic)",
                guaranteed: false,
            },
            {
                name: "Flameborn Quillshot",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Razorcliff Isle",
        icon: "Island_Icon_006.webp",
        level: {
            min: 16,
            max: 19,
        },
        behemoths: [
            {
                name: "Rezakiri",
                guaranteed: true,
            },
            {
                name: "Frostback Pangar (Heroic)",
                guaranteed: false,
            },
            {
                name: "Koshai (Heroic)",
                guaranteed: false,
            },
            {
                name: "Winterhorn Skraev (Heroic)",
                guaranteed: false,
            },
            {
                name: "Lightbound Boreus",
                guaranteed: false,
            },
            {
                name: "Earthshaper Fenroar",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "The Paradox Breaks",
        icon: "Island_Icon_Radiant.webp",
        level: {
            min: 16,
            max: 19,
        },
        behemoths: [
            {
                name: "Lightbound Koshai",
                guaranteed: true,
            },
            {
                name: "Flameborn Rezakiri",
                guaranteed: false,
            },
            {
                name: "Phaelanx",
                guaranteed: false,
            },
            {
                name: "Rockfall Skarn (Heroic)",
                guaranteed: false,
            },
            {
                name: "Valomyr (Heroic)",
                guaranteed: false,
            },
            {
                name: "Rezakiri",
                guaranteed: false,
            },
            {
                name: "Alyra",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "Twilight Sanctuary",
        icon: "Island_Icon_006.webp",
        level: {
            min: 17,
            max: 20,
        },
        behemoths: [
            {
                name: "Shrowd",
                guaranteed: true,
            },
            {
                name: "Thunderdeep Drask",
                guaranteed: false,
            },
            {
                name: "Scorchstone Hellion (Heroic)",
                guaranteed: false,
            },
            {
                name: "Tempestborne Stormclaw",
                guaranteed: false,
            },
            {
                name: "Riftstalker (Heroic)",
                guaranteed: false,
            },
            {
                name: "Phaelanx",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
    {
        name: "The Blazeworks",
        icon: "Island_Icon_Radiant.webp",
        level: {
            min: 21,
            max: 24,
        },
        behemoths: [
            {
                name: "Koshai (Heroic)",
                guaranteed: false,
            },
            {
                name: "Bloodshot Shrowd",
                guaranteed: false,
            },
            {
                name: "Scorchstone Hellion (Heroic)",
                guaranteed: false,
            },
            {
                name: "Bloodfire Embermane (Heroic)",
                guaranteed: false,
            },
            {
                name: "Sporestruck Charrogg",
                guaranteed: false,
            },
            {
                name: "Razorwing Kharabak (Heroic)",
                guaranteed: false,
            },
            {
                name: "Phaelanx",
                guaranteed: false,
            },
        ],
        gatherables: [],
        events: [],
        discoveries: [],
    },
];
//# sourceMappingURL=island.js.map