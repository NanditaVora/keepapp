import { Component } from '@angular/core';

class Note{
  title:string='';
  text:string='';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keepapp';
  textColor: string = "white";
  errorMessage: string = "";

  notes: Array<Note> = [];

  note : Note = new Note();

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

  addNote(){
    this.notes.push(this.note);
    console.log(this.notes);
    console.log('Note Added')
    this.note = new Note();
  }

  onChangeTitle(event){
    this.note.title = event.target.value;
  }
  
  onChangeText(event){
    this.note.text = event.target.value;
  }

}
