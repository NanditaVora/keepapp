import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditNoteOpenerComponent } from '../edit-note-opener/edit-note-opener.component';
import { Note } from '../models/note';
import { AuthenticationService } from '../services/authentication.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {

  note: Note;
  errorMessage: string = '';

  constructor(private noteService: NoteService,
    private authService: AuthenticationService,
    private dialogRef: MatDialogRef<EditnoteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.note =  this.noteService.getNoteById(this.data.noteId)
  }

  saveNote(){
    this.noteService.editNote(this.note, this.authService.getToken())
    .subscribe(
      response=>{
        console.log('note updated')
        this.dialogRef.close();
      },
      error=>{
        this.errorMessage = error;
      }
    )
  }
}
