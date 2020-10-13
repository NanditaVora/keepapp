import { Component } from '@angular/core';
import { Note } from './models/note';
import { AuthenticationService } from './services/authentication.service';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  textColor: string = "white";
  

  // onChangeTitle(event){
  //   this.note.title = event.target.value;
  // }
  
  // onChangeText(event){
  //   this.note.text = event.target.value;
  // }

}
