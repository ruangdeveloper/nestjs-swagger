import { Injectable } from '@nestjs/common';
import { Note } from './app.entity';

@Injectable()
export class AppService {
  createNote(title: string, description: string): Note {
    return {
      title,
      description,
    };
  }

  getNote(): Note {
    return {
      title: 'Note title',
      description: 'Note description',
    };
  }

  getAllNotes(): Array<Note> {
    return [
      {
        title: 'Note title',
        description: 'Note description',
      },
    ];
  }

  updateNote(title: string, description: string): Note {
    return {
      title,
      description,
    };
  }

  deleteNote() {
    return {
      message: 'Note deleted successfully',
    };
  }
}
