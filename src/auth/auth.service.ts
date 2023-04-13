import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  singup() {
    return { msg: "Singned up" };
  }

  singin() {
    return { msg: "Singned in" };
  }
}
