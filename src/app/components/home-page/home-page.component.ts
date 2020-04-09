import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { COLLECTIONS } from '@sp-constants/collections';
import { Scoreboard } from '@sp-interfaces/scoreboard';
import { User } from 'firebase';
import { auth } from 'firebase/app';

@Component({
  selector: 'sp-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  public isComponentLoading: boolean;
  public progressBarMode: 'buffer' | 'indeterminate';

  private user: null | User;

  public constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) { }

  public ngOnInit(): void {

    this.isComponentLoading = true;

    this.progressBarMode = 'buffer';

    // this.user;

    this.angularFireAuth.user.subscribe(

      (user: null | User): void => {

        this.user = user;

        this.isComponentLoading = false;

      }

    );

  }

  public getNewScoreboard(): void {

    this.isComponentLoading = true;

    if (this.user === null) {

      this.angularFireAuth.signInAnonymously().then(

        (userCredential: auth.UserCredential): void => {

          if (userCredential.user === null) {

            this.matSnackBar.open('Something went wrong.');

            this.isComponentLoading = false;

          } else {

            this.createScoreboard(userCredential.user.uid);

          }

        }

      ).catch(

        (error: Error): void => {

          this.matSnackBar.open(error.message);

          this.isComponentLoading = false;

        }

      );

    } else {

      this.createScoreboard(this.user.uid);

    }

  }

  private createScoreboard(userUid: string): void {

    this.progressBarMode = 'indeterminate';

    const scoreboard: Scoreboard = {
      id: this.angularFirestore.createId(),
      ownerUid: userUid
    };

    this.angularFirestore.collection(COLLECTIONS.SCOREBOARDS).doc(scoreboard.id).set(scoreboard).then(

      (): void => {

        this.router.navigate(['scoreboard/' + scoreboard.id, 'edit']);

      }

    ).catch(

      (error: Error): void => {

        this.matSnackBar.open(error.message);

        this.isComponentLoading = false;

      }

    );

  }

}
