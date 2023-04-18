export declare class GatherableService {
    private gatherables;
    getAllGatherables(): {
        name: string;
        icon: string;
        type: string;
        crafts: {
            name: string;
        }[];
    }[];
}
