export declare enum GatherableType {
    Flower = "Flower",
    Ore = "Ore"
}
export declare enum GatherableRarity {
    Common = "Common",
    Uncommon = "Uncommon",
    Rare = "Rare"
}
export declare class GatherableDto {
    name: string;
    type: GatherableType;
    rarity: GatherableRarity;
    crafts: [];
}
