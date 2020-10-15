import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//for toolbar component
import { MatToolbarModule } from '@angular/material/toolbar';

//for expansion panel component
import {MatExpansionModule} from '@angular/material/expansion';

//for card
import { MatCardModule } from '@angular/material/card';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './services/note.service';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontColorDirective } from './directives/font-color.directive';
import { BackgroundDirective } from './directives/background.directive';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteComponent } from './note/note.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    FontColorDirective,
    BackgroundDirective,
    NoteTakerComponent,
    NoteViewComponent,
    NoteComponent,
    EditNoteOpenerComponent,
    EditnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent],
  entryComponents: [EditnoteComponent]
})
export class AppModule { }
