import { NgModule } from '@angular/core';
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
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: ENVIRONMENT.isProduction }),
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }
