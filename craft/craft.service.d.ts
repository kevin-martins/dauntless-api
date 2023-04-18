export declare class CraftService {
    private crafts;
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
