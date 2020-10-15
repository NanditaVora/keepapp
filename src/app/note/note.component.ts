import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note: Note;

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
  }

  openEditView(){
    //route to edit note opener component
    this.routeService.toEditNote(this.note.id);
  }

}
