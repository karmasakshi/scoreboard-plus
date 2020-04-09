import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { COLLECTIONS } from '@sp-constants/collections';
import { Scoreboard } from '@sp-interfaces/scoreboard';
import { User } from 'firebase';
import { Participant } from '@sp-interfaces/participant';

@Component({
  selector: 'sp-scoreboard-page',
  styleUrls: ['./scoreboard-page.component.scss'],
  templateUrl: './scoreboard-page.component.html'
})
export class ScoreboardPageComponent implements OnInit {

  public isComponentLoading: boolean;
  public isUserOwner: boolean;
  public scoreboard: Scoreboard;
  public scoreboardFormGroup: FormGroup;
  public participantFormGroup: FormGroup;

  private user: null | User;

  public constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {

    this.isComponentLoading = true;

    this.isUserOwner = false;

    // this.scoreboard;

    this.scoreboardFormGroup = new FormGroup({
      title: new FormControl('Antakshari')
    });

    this.participantFormGroup = new FormGroup({
      name: new FormControl('')
    });

    // this.user;

    this.angularFireAuth.user.subscribe(

      (user: null | User): void => {

        this.user = user;

        this.getScoreboard();

      },

      (error: Error): void => {

        this.matSnackBar.open(error.message);

      }

    );

  }

  public updateTitle(): void {

    this.isComponentLoading = true;

    this.scoreboard.title = this.scoreboardFormGroup.value.title;

    this.angularFirestore.collection<Scoreboard>(COLLECTIONS.SCOREBOARDS).doc<Scoreboard>(this.scoreboard.id).set(this.scoreboard).then(

      (): void => {

        this.isComponentLoading = false;

      }

    ).catch(

      (error: Error): void => {

        this.matSnackBar.open(error.message);

        this.isComponentLoading = false;

      }

    );

  }

  public addParticipant(): void {

    this.isComponentLoading = true;

    const participant: Participant = {
      id: this.angularFirestore.createId(),
      name: this.participantFormGroup.value.name
    };

    this.scoreboard.participants.push(participant);

    this.angularFirestore.collection<Scoreboard>(COLLECTIONS.SCOREBOARDS).doc<Scoreboard>(this.scoreboard.id).set(this.scoreboard).then(

      (): void => {

        this.participantFormGroup.reset();

        this.isComponentLoading = false;

      }

    ).catch(

      (error: Error): void => {

        this.matSnackBar.open(error.message);

        this.isComponentLoading = false;

      }

    );

  }

  private checkOwnership(): void {

    if (typeof this.scoreboard === 'undefined') {

      // Read-only subscription;

      this.isUserOwner = false;

    } else {


      if (this.user === null) {

        // Read-only subscription

        this.isUserOwner = false;

      } else {

        if (this.scoreboard.ownerUid !== this.user.uid) {

          // Read-only subscription

          this.isUserOwner = false;

        } else {

          this.isUserOwner = true;

        }

      }

    }

  }

  public addRoundScores(): void {

    // open bottom sheet

  }

  private getScoreboard(): void {

    const scoreboardId: null | string = this.activatedRoute.snapshot.paramMap.get('scoreboardId');

    if (scoreboardId === null) {

      this.matSnackBar.open('Scoreboard ID is invalid.');

      this.router.navigate(['/']);

    } else {

      this.angularFirestore.collection<Scoreboard>(COLLECTIONS.SCOREBOARDS).doc<Scoreboard>(scoreboardId).valueChanges().subscribe(

        (scoreboard: undefined | Scoreboard): void => {

          if (typeof scoreboard === 'undefined') {

            this.matSnackBar.open('Scoreboard not found.');

            this.router.navigate(['/']);

          } else {

            this.scoreboard = scoreboard;

            this.isComponentLoading = false;

            this.checkOwnership();

          }

        },

        (error: Error): void => {

          this.matSnackBar.open(error.message);

          this.isComponentLoading = false;

        }

      );

    }

  }

}
