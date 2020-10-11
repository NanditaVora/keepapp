import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable()
export class NoteService {
  
  constructor(private httpClient: HttpClient) {

  }

  addNote(note: Note) : Observable<Note>{
    return this.httpClient.post<Note>('http://localhost:3000/notes',note)
  }

  getNotes() : Observable<Array<Note>>{
    return this.httpClient.get<Array<Note>>('http://localhost:3000/notes')
  }

  deleteNote(noteId: Number) {
    return this.httpClient.delete('http://localhost:3000/notes/'+noteId)
  }

}
