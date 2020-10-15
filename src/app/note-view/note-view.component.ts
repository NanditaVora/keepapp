import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { AuthenticationService } from '../services/authentication.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  notes: Array<Note> = [];

  constructor(private noteService: NoteService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    
    this.noteService.getNotes(this.authService.getToken())
    .subscribe(response=>{
      this.notes = response
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
