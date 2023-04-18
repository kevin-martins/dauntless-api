import { CraftService } from "./craft.service";
export declare class CraftController {
    private craftService;
    constructor(craftService: CraftService);
    getAllCrafts(): {
        name: string;
        icon: string;
        type: string;
        effect: string;
        capacity: number;
        price: number;
        quantity: number;
        recipe: {
            name: string;
            quantity: number;
        }[];
    }[];
}
