import { GatherableService } from "./gatherable.service";
export declare class GatherableController {
    private gatherableService;
    constructor(gatherableService: GatherableService);
    getAllGatherables(): {
        name: string;
        icon: string;
        type: string;
        crafts: {
            name: string;
        }[];
    }[];
}
