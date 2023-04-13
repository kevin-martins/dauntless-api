import { ApiProperty } from "@nestjs/swagger";

export enum GatherableType {
  Flower,
  Ore,
}

export enum GatherableRarity {
  Common,
  Uncommon,
  Rare,
}

export class GatherableDto {
  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    enum: ["Flower", "Ore"],
  })
  type: GatherableType;

  @ApiProperty({
    enum: ["Common", "Uncommon", "Rare"],
  })
  rarity: GatherableRarity;

  crafts: [];
}
