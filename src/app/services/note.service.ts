import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable()
export class NoteService {
  
  constructor(private httpClient: HttpClient) {

  }

  addNote(note: Note, token: string) : Observable<Note>{
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
    })
  }

  getNotes(token: string) : Observable<Array<Note>>{
    console.log(token)
    return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
    })
  }

  deleteNote(noteId: Number) {
    return this.httpClient.delete('http://localhost:3000/notes/'+noteId)
  }

}
