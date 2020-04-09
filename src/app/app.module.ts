import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomePageComponent } from '@sp-components/home-page/home-page.component';
import { MainComponent } from '@sp-components/main/main.component';
import { PageComponent } from '@sp-components/page/page.component';
import { ScoreboardEditorPageComponent } from '@sp-components/scoreboard-editor-page/scoreboard-editor-page.component';
import { ScoreboardPageComponent } from '@sp-components/scoreboard-page/scoreboard-page.component';
import { ScoreboardComponent } from '@sp-components/scoreboard/scoreboard.component';
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
    ScoreboardEditorPageComponent,
    ScoreboardPageComponent,
    ScoreboardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(ENVIRONMENT.firebaseConfiguration),
    AngularFirestoreModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: ENVIRONMENT.isProduction }),
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { horizontalPosition: 'center', duration: 5000, verticalPosition: 'bottom' } },
  ]
})
export class AppModule { }
