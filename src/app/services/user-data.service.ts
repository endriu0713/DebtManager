import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { User } from '../model/User';
import { Friend } from '../model/Friend';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  usersCollection: AngularFirestoreCollection<User>;
  friendsCollection: AngularFirestoreCollection<Friend>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;
  friends: Observable<Friend[]>;

  constructor(private afs: AngularFirestore) {
    //  this.usersCollection = this.afs.collection<User>('user', ref => ref.orderBy('username', 'asc'));
    this.usersCollection = this.afs.collection<User>('user', ref => ref.where('username', '==', 'patryk'));

  }

  friendOne: Friend = {
    username: 'Zdzich',
    alias: 'Zdzich',
    description: '',
    id: ''
  };

  friendTwo: Friend = {
    username: 'Władzio',
    alias: 'Władzio',
    description: '',
    id: ''
  };

  userOne: User = {
    username: 'patryk',
    email: 'patryk@gmail.com',
    friendsArray: []
  };



  getUsers(): Observable<User[]> {
    this.users = this.usersCollection.valueChanges(); // read-only mosty for view
    // this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
    //   return changes.map(action => {
    //     const data = action.payload.doc.data() as User;
    //     data.id = action.payload.doc.id;
    //     return data;
    //   });
    // }));
    // this.users = this.usersCollection.stateChanges(['added']).pipe(map(changes => {
    //   return changes.map(action => {
    //     const data = action.payload.doc.data() as User;
    //     data.id = action.payload.doc.id;
    //     return data;
    //   });
    // }));
    // this.users = this.usersCollection.auditTrail().pipe(map(changes => {
    //   return changes.map(action => {
    //     const data = action.payload.doc.data() as User;
    //     data.id = action.payload.doc.id;
    //     return data;
    //   });
    // }));
    return this.users;
  }

  getUser(user: string): Observable<User> {
    this.userDoc = this.afs.doc<User>('users/' + user); // 'collection/id'
    this.user = this.userDoc.valueChanges();
    console.log('services: ', this.user);
    return this.user;
  }

  addUser() {
    // tslint:disable
    // this.userOne.id = this.afs.createId();
    // this.usersCollection.doc(this.userOne.id).set(this.userOne);
      //this.userOne.id = this.afs.createId();

    this.friendOne.id = "patryk1234";
    this.userOne.friendsArray.push(this.friendOne);

    this.friendTwo.id = this.afs.createId();
    this.userOne.friendsArray.push(this.friendTwo);

    //this.userDoc.update(this.userOne);
    this.usersCollection.doc('patryk').set(this.userOne);
  }
}
