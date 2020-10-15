import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { AuthenticationService } from '../services/authentication.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {

  note: Note = new Note();
  notes : Array<Note> = [];
  errorMessage: string = "";

  constructor(private noteService: NoteService, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  addNote(){
    this.noteService.addNote(this.note, this.authService.getToken())
    .subscribe(response=>{
      this.notes.push(response);
      console.log(this.notes);
      this.note = new Note();
    },  
    error=>{
      if(error.status===404)
        console.log('Resource Not Found')
      else if(error.status===403)
        console.log('Access Denied')
      else if(error.status===401)
        console.log('Unauthorized')
      else
        console.log('Unable to Process the Request Now, please try again later');
    })
  }
}
