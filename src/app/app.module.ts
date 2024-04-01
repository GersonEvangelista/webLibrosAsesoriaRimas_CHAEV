import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Header/header/header.component';
import { BookComponent } from './Book/book/book.component';
import { AsesoryComponent } from './Asesory/asesory/asesory.component';
import { VerseComponent } from './Verse/verse/verse.component';

//angular
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

//ngModel
import { FormsModule } from '@angular/forms';
import { BusinessComponent } from './Book/book/business/business.component';
import { DevelopmentComponent } from './Book/book/development/development.component';
import { AcademicComponent } from './Book/book/academic/academic.component';
import { LiteraryWorksComponent } from './Book/book/literary-works/literary-works.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    AsesoryComponent,
    VerseComponent,
    BusinessComponent,
    DevelopmentComponent,
    AcademicComponent,
    LiteraryWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
