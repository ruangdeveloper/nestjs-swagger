import { ApiProperty } from '@nestjs/swagger';
import { Note } from './app.entity';

export class ApiResponse<T> {
  data: T;
  message: string;
}

export class NoteIndexResponseExample {
  @ApiProperty({ type: [Note] })
  data: Array<Note>;

  @ApiProperty()
  message: string;
}

export class NoteShowResponseExample {
  @ApiProperty({ type: Note })
  data: Note;

  @ApiProperty()
  message: string;
}

export class NoteStoreResponseExample {
  @ApiProperty({ type: Note })
  data: Note;

  @ApiProperty()
  message: string;
}

export class NoteUpdateResponseExample {
  @ApiProperty({ type: Note })
  data: Note;

  @ApiProperty()
  message: string;
}
