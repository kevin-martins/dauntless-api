import { BehemothProps } from "src/shared/api-call.dto";
export declare class IslandDto {
    name: string;
    icon: string;
    level: {
        min: number;
        max: number;
    };
    behemoths: BehemothProps[];
    gatherables: {
        name: string;
        type: string;
        rarity: string;
    }[] | null;
    events: [] | null;
    discoveries: [] | null;
}
