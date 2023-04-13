import { ApiProperty } from "@nestjs/swagger";

export class BehemothProps {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Boolean })
  guaranteed: boolean;
}

export class GatherableProps {
  @ApiProperty({ type: String })
  name: string;
}

export class EventProps {
  @ApiProperty({ type: String })
  name: string;
}

export class ApiCallDto {
  @ApiProperty({ type: String })
  name: string;
}
