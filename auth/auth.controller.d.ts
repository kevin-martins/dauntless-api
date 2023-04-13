import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    singup(): {
        msg: string;
    };
    singin(): {
        msg: string;
    };
}
