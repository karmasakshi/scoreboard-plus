import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@sp-components/home-page/home-page.component';
import { ScoreboardEditorPageComponent } from '@sp-components/scoreboard-editor-page/scoreboard-editor-page.component';
import { ScoreboardPageComponent } from '@sp-components/scoreboard-page/scoreboard-page.component';
import { ScoreboardComponent } from '@sp-components/scoreboard/scoreboard.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'scoreboard/:scoreboardId', component: ScoreboardComponent, children: [
      { path: '', component: ScoreboardPageComponent },
      { path: 'edit', component: ScoreboardEditorPageComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
