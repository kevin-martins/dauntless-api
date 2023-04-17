import { ApiProperty } from "@nestjs/swagger";

export enum CraftType {
  Tonic = "Tonic",
  Pylon = "Pylon",
  Grenade = "Grenade",
}

export enum GatherableRarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
}
