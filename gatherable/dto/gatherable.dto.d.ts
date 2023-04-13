export declare enum GatherableType {
    Flower = 0,
    Ore = 1
}
export declare enum GatherableRarity {
    Common = 0,
    Uncommon = 1,
    Rare = 2
}
export declare class GatherableDto {
    name: string;
    type: GatherableType;
    rarity: GatherableRarity;
    crafts: [];
}
