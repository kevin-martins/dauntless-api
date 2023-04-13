import { IslandService } from "./island.service";
export declare class IslandController {
    private islandService;
    constructor(islandService: IslandService);
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
            type: string;
            rarity: string;
        }[];
        events: {
            name: string;
            description: string;
        }[];
        discoveries: {
            name: string;
        }[];
    }[];
    getIslandNamesByBehemothName(name: string): string[];
    getIslandsByLevel(min: string, max: string): {
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
            type: string;
            rarity: string;
        }[];
        events: {
            name: string;
            description: string;
        }[];
        discoveries: {
            name: string;
        }[];
    }[];
    getIslandNamesByGatherable(name: string, type: string, rarity: string): {
        name: string;
        type: string;
        rarity: string;
    };
}
