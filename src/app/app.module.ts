import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { config } from './config';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app'; 
import { FirestoreModule } from '@angular/fire/firestore';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { PaintingpageComponent } from './paintingpage/paintingpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MuseumComponent } from './museum/museum.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GalleryComponent,
    MenuComponent,
    ExhibitionComponent,
    PaintingpageComponent,
    NotFoundComponent,
    MuseumComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    FirebaseAppModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
    FirestoreModule,
    MatTabsModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatDatepickerModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
