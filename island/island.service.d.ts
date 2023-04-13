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
}
