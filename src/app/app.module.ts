import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from '@sp-components/home-page/home-page.component';
import { MainComponent } from '@sp-components/main/main.component';
import { PageComponent } from '@sp-components/page/page.component';
import { ScoreboardPageComponent } from '@sp-components/scoreboard-page/scoreboard-page.component';
import { ScoreboardTableComponent } from '@sp-components/scoreboard-table/scoreboard-table.component';
import { ENVIRONMENT } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [
    MainComponent
  ],
  declarations: [
    HomePageComponent,
    MainComponent,
    PageComponent,
    ScoreboardPageComponent,
    ScoreboardTableComponent
  ],
  imports: [
    AngularFireModule.initializeApp(ENVIRONMENT.firebaseConfiguration),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { horizontalPosition: 'center', duration: 5000, verticalPosition: 'bottom' } },
  ]
})
export class AppModule { }
