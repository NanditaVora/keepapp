import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from '../models/note';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NoteService {

  notes: Array<Note>=[];
  noteSubject : BehaviorSubject<Array<Note>> = new BehaviorSubject(this.notes);

  constructor(private httpClient: HttpClient,
    private authService: AuthenticationService
    ) {
    this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.authService.getToken()}`)
    }).subscribe(
      response=>{
        this.notes = response;
        this.noteSubject.next(this.notes);
      }
    )
  }

  addNote(note: Note, token: string) : Observable<Note>{
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
    })
    .pipe(tap(
      response=>{
        this.notes.push(response);
        this.noteSubject.next(this.notes);
      }
    ))
  }

  getNotes(token: string) : Observable<Array<Note>>{
    console.log(token)
    return this.noteSubject;
  }

  getNoteById(noteId: number): Note{
    const note = this.notes.find(n => n.id === noteId)
    return Object.assign({},note);

  }

  deleteNote(noteId: Number) {
    return this.httpClient.delete('http://localhost:3000/notes/'+noteId)
  }

  editNote(note: Note, token: string) : Observable<Note>{
    return this.httpClient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`,note,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
    })
    .pipe(tap(
      response=>{
        const note = this.notes.find(n => n.id === response.id)
        Object.assign(note,response);
        this.noteSubject.next(this.notes);
      }
    ))
  }
}
