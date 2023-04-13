import { ApiProperty } from "@nestjs/swagger";

export class BehemothDto {
  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Boolean,
  })
  guaranteed: boolean;
}
