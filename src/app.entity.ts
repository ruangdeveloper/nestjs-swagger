import { ApiProperty } from '@nestjs/swagger';

export class Note {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
