import Firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store'
const config = {
   apiKey: "AIzaSyBTKJZcHqJWllerYuEY_P0N4vPuwKzpHDI",
   authDomain: "snowvt-29682.firebaseapp.com",
   databaseURL: "https://snowvt-29682.firebaseio.com",
   projectId: "snowvt-29682",
   storageBucket: "snowvt-29682.appspot.com",
   messagingSenderId: "57138291605"
 };
export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    Firebase.initializeApp(config)
    super(Firebase.database().ref())
  }

}
