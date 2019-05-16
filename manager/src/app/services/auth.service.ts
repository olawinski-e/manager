import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { UserI } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData: UserI = null; // Save logged in user data

  get user(): UserI {
    return this.userData;
  }

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private router: Router
  ) {
    // On regarde la session pour voir si on a déjà le user
    const userCache = JSON.parse(localStorage.getItem('user'));
    if (userCache) {
      this.userData = userCache;
    }

    // Si l'authentification est mise à jour on set à nouveau la sessions.
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        this.userData = null;
        localStorage.setItem('user', null);
      }
    });
  }

  // Sign in with Google
  public googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  authLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/app']);
        });
        this.setUserData(result.user);

      }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: UserI = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Déconnexion
  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      console.log('TODO :Déconnexion, redirection au login');
    });
  }

  // Retour l'utilisateur si connecté et que l'email et verifié
  get isLoggedIn(): boolean {
    console.log(this.userData);
    return (this.userData !== null && this.userData.emailVerified !== false);
  }
}

