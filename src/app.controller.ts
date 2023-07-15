import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNoteRequest, UpdateNoteRequest } from './app.request';
import { Note } from './app.entity';
import {
  ApiResponse,
  NoteIndexResponseExample,
  NoteShowResponseExample,
  NoteStoreResponseExample,
  NoteUpdateResponseExample,
} from './app.response';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Note Endpoints')
@Controller('notes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    type: () => NoteIndexResponseExample,
  })
  index(): ApiResponse<Array<Note>> {
    const notes = this.appService.getAllNotes();

    return {
      data: notes,
      message: 'Notes retrieved successfully',
    };
  }

  @Get(':id')
  @ApiOkResponse({
    type: () => NoteShowResponseExample,
  })
  show(): ApiResponse<Note> {
    const note = this.appService.getNote();

    return {
      data: note,
      message: 'Note retrieved successfully',
    };
  }

  @Post()
  @ApiOkResponse({
    type: () => NoteStoreResponseExample,
  })
  store(@Body() body: CreateNoteRequest): ApiResponse<Note> {
    const note = this.appService.createNote(body.title, body.description);

    return {
      data: note,
      message: 'Note created successfully',
    };
  }

  @Put(':id')
  @ApiOkResponse({
    type: () => NoteUpdateResponseExample,
  })
  update(@Body() body: UpdateNoteRequest): ApiResponse<Note> {
    const note = this.appService.updateNote(body.title, body.description);

    return {
      data: note,
      message: 'Note updated successfully',
    };
  }

  @Delete(':id')
  destroy(): ApiResponse<null> {
    const result = this.appService.deleteNote();

    return {
      data: null,
      message: result.message,
    };
  }
}
