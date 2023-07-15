import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteRequest {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}

export class UpdateNoteRequest {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
