import {firebaseApp} from '../components/base';

export default class AuthStore {
   authUser = null;

  constructor() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      this.authUser = user;
    })
  }

  test(str){
     console.log("you called auth.test with: " + str);
 }
  signIn(email, password) {
     if(this.authUser) {
      return Promise.resolve(this.authUser)
    }
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
  }

  signUp(email, password) {
    if(this.authUser) {
      let p = new Promise((resolve, reject) => {
        firebaseApp.auth().signOut().then(() => {
          firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              resolve()
            },(err) => {
              reject(err)
            })
        }, (err) => {
          reject(err)
        })
      })
      return p
    }
    else {
      return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    }
  }

  forgotPassword(email) {
    return firebaseApp.auth().sendPasswordResetEmail(email)
  }
}
