import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@firebase/auth-types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable
  user = new BehaviorSubject<User>(null);
  constructor(private afAuth: AngularFireAuth) {   }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData)
      , err => reject(err));
    });
  }

  getAuth(): Observable<User> | null {
    return this.afAuth.authState.pipe(map(auth => {
      return auth;
    }));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData)
      , err => reject(err));
    });
  }
}
