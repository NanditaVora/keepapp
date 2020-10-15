import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EditnoteComponent } from '../editnote/editnote.component';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent implements OnInit {

  constructor(private dialog: MatDialog, private activeRoute : ActivatedRoute, 
    private routeService: RouteService) { }

  ngOnInit(): void {
    this.dialog.open(EditnoteComponent,
      {
        data: {
          noteId : +this.activeRoute.snapshot.paramMap.get('noteId')
        }
      })
      .afterClosed()
      .subscribe(
        data=>{
          this.routeService.toPrevious();
        }
      )
      ;
  }

}
