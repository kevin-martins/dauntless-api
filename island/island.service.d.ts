import { GatherableRarity } from "src/gatherable/dto/gatherable.dto";
export declare class IslandService {
    private islands;
    getAllIslands(): {
        name: string;
        icon: string;
        level: {
            min: number;
            max: number;
        };
        behemoths: {
            name: string;
            guaranteed: boolean;
        }[];
        gatherables: {
            name: string;
            rarity: string;
        }[];
        events: {
            name: string;
        }[];
        discoveries: {
            name: string;
        }[];
    }[];
    getIslandsByBehemothName(name: string): {
        name: string;
        icon: string;
        level: {
            min: number;
            max: number;
        };
        behemoths: {
            name: string;
            guaranteed: boolean;
        }[];
        gatherables: {
            name: string;
            rarity: string;
        }[];
        events: {
            name: string;
        }[];
        discoveries: {
            name: string;
        }[];
    }[];
    getIslandsByLevel(min: number, max: number): {
        name: string;
        icon: string;
        level: {
            min: number;
            max: number;
        };
        behemoths: {
            name: string;
            guaranteed: boolean;
        }[];
        gatherables: {
            name: string;
            rarity: string;
        }[];
        events: {
            name: string;
        }[];
        discoveries: {
            name: string;
        }[];
    }[];
    getIslandNamesByGatherable(name: string, rarity: GatherableRarity): {
        name: string;
        rarity: GatherableRarity;
    };
}
