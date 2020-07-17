import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Scoreboard } from '@sp-interfaces/scoreboard';
import { AngularFirestore } from '@angular/fire/firestore';
import { COLLECTIONS } from '@sp-constants/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl } from '@angular/forms';
import { RoundScore } from '@sp-interfaces/round-score';

@Component({
  selector: 'sp-round-scores-bottom-sheet',
  templateUrl: './round-scores-bottom-sheet.component.html',
  styleUrls: ['./round-scores-bottom-sheet.component.scss']
})
export class RoundScoresBottomSheetComponent implements OnInit {

  public isComponentLoading: boolean;
  public roundScoresFormGroup: FormGroup;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<RoundScoresBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Scoreboard,
    private angularFirestore: AngularFirestore,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.isComponentLoading = false;

    const form: any = {};

    for (const p of this.data.participants) {
      form[p.id] = new FormControl(0);
    }

    form['roundName'] = new FormControl('Round');
    form['roundNumber'] = new FormControl(0);

    this.roundScoresFormGroup = new FormGroup(form);

  }

  saveRoundScores(): void {

    this.isComponentLoading = true;

    const roundScore: RoundScore = {
      roundNumber: this.roundScoresFormGroup.value.roundNumber,
      roundName: this.roundScoresFormGroup.value.roundName,
    };

    for (const p of this.data.participants) {
      roundScore[p.id] = this.roundScoresFormGroup.value[p.id];
    }

    this.data.roundScores.push(roundScore);

    this.angularFirestore.collection<Scoreboard>(COLLECTIONS.SCOREBOARDS).doc<Scoreboard>(this.data.id).set(this.data).then(

      () => {

        this.isComponentLoading = false;

        this.bottomSheetRef.dismiss();

      }

    ).catch(

      (error: Error) => {

        this.isComponentLoading = false;

        this.matSnackBar.open(error.message);

      }

    );

  }

}
