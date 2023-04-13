import { ApiProperty } from "@nestjs/swagger";
import { BehemothDto } from "../../behemoth/dto/behemoth.dto";
import { GatherableDto } from "../../gatherable/dto/gatherable.dto";
import { BehemothProps, GatherableProps } from "src/shared/api-call.dto";

type EventProps = {
  name: string;
  description: string;
};

type DiscoveryProps = {
  name: string;
};

export class IslandDto {
  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  icon: string;

  @ApiProperty({
    type: {
      min: Number,
      max: Number,
    },
  })
  level: {
    min: number;
    max: number;
  };

  @ApiProperty({
    type: [BehemothProps],
  })
  behemoths: BehemothProps[];

  @ApiProperty({
    type: [
      {
        name: String,
        type: String,
        rarity: String,
      },
    ],
  })
  gatherables:
    | {
        name: string;
        type: string;
        rarity: string;
      }[]
    | null;

  events: [] | null;
  discoveries: [] | null;
}
