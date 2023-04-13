import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { IslandModule } from "./island/island.module";
// import { DauntlessModule } from "./dauntless/dauntless.module";

@Module({
  imports: [AuthModule, UserModule, IslandModule],
})
export class AppModule {}
