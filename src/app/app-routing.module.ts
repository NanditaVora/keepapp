import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { LoginComponent } from './login/login.component';
import { NoteViewComponent } from './note-view/note-view.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [CanActivateGuard],
    children:[
      {
        path: 'notes',
        component: NoteViewComponent
      },
      {
        path: ':noteId/edit',
        component: EditNoteOpenerComponent,
        outlet: 'editOutlet'
      },
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
