import { observable, action } from 'mobx'
import Firebase from 'firebase';

export default class AuthStore {
   @observable authUser = null

  constructor() {
    //firebaseApp.auth().onAuthStateChanged((user) => {
    Firebase.auth().onAuthStateChanged((user) => {
      this.authUser = user;
    })
  }
 @action
  signIn(email, password) {
     if(this.authUser) {
      return Promise.resolve(this.authUser)
    }
    return Firebase.auth().signInWithEmailAndPassword(email, password)
  }
 @action
  signUp(email, password) {

    if(this.authUser) {
      let p = new Promise((resolve, reject) => {
        Firebase.auth().signOut().then(() => {
          Firebase.auth().createUserWithEmailAndPassword(email, password)
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
      return Firebase.auth().createUserWithEmailAndPassword(email, password)
    }
  }
 @action
  forgotPassword(email) {
    return Firebase.auth().sendPasswordResetEmail(email)
  }


seedResorts(token){
      var user = Firebase.auth().currentUser;
      //console.log("UserData/" + user.uid + "/" + "jaypeak");

      var snoBroRef = this.getDBRef();

      Firebase.database().ref("UserData/" + user.uid + "/" + "jaypeak").set( "jaypeak" );
      this.setItem( resortKey );

}


}
