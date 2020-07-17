import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Participant } from '@sp-interfaces/participant';
import { RoundScore } from '@sp-interfaces/round-score';
import { Scoreboard } from '@sp-interfaces/scoreboard';
import { ScoreboardPageComponent } from '@sp-components/scoreboard-page/scoreboard-page.component';

@Component({
  selector: 'sp-scoreboard-table',
  styleUrls: ['./scoreboard-table.component.scss'],
  templateUrl: './scoreboard-table.component.html'
})
export class ScoreboardTableComponent implements OnChanges, OnInit {

  @Input() public scoreboard: Scoreboard;

  public displayedColumns: string[];
  public dataSource: RoundScore[];
  public participants: Participant[];

  public constructor() { }

  public ngOnChanges(simpleChanges: SimpleChanges): void {

    if (!simpleChanges.scoreboard.firstChange) {

      this.initializeScoreboardTable();

    }

  }

  public ngOnInit(): void {

    this.displayedColumns = [];

    this.dataSource = [];

    this.participants = [];

  }

  public initializeScoreboardTable(): void {

    this.participants = this.scoreboard.participants;

    const participantIds: string[] = this.scoreboard.participants.map(i => i.id);

    this.displayedColumns = ['roundNumber', 'roundName', ...participantIds];

    this.dataSource = this.scoreboard.roundScores;

  }

}
