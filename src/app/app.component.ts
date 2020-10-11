import { Component } from '@angular/core';
import { Note } from './models/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  textColor: string = "white";
  errorMessage: string = "";

  notes: Array<Note> = [];

  note : Note = new Note();

  constructor(private noteService: NoteService){}

  validate(event){
    console.log(event);
    if(event.target.value.length < 6){
      this.textColor = "red"
      this.errorMessage = 'Title should be of minimum 6 characters long';
    }
    else{
      this.errorMessage=''
      this.textColor = "lightgreen"
    }
  }

  ngOnInit(){
    this.noteService.getNotes()
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

  addNote(){
    this.noteService.addNote(this.note)
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

  deleteNote(noteId: Number){
    this.noteService.deleteNote(noteId)
    .subscribe(
      response=>{
        console.log('record deleted')
        let noteIndex = this.notes.indexOf(this.note);
        this.notes.splice(noteIndex,1)
      }
    ),
    error=>{
      if(error.status===404)
      console.log('Resource Not Found')
    else if(error.status===403)
      console.log('Access Denied')
    else if(error.status===401)
      console.log('Unauthorized')
    else
      console.log('Unable to Process the Request Now, please try again later');
    }
  }

  onChangeTitle(event){
    this.note.title = event.target.value;
  }
  
  onChangeText(event){
    this.note.text = event.target.value;
  }

}
