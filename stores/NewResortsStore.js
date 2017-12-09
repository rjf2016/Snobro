
import MobxFirebaseStore, {primitiveKey} from 'mobx-firebase-store';
import { ObservableMap, observable, action, computed, autorun } from 'mobx';

import Firebase from 'firebase';

var resorts = [];


export default class NewResortsStore extends MobxFirebaseStore {
   @observable newResortData = "";

   constructor()
      {
        //Firebase.initializeApp(config)
        //super(props)
        super(Firebase.database().ref());

        Firebase.auth().onAuthStateChanged((user) => {
           this.user = user;
           this.getNewResorts();
         })

          
      }

      @action setItem(data) {
          this.newResortData = data;
        }
    

    getAll(){
       return this.getData('NewResorts');
     }

    subs()  {
        this.getNewResorts();

       

         return resorts;
      }



    getDBRef(){
      const ref = Firebase.database().ref();
      return ref;
    }

    addResorts(resortKey) {
      var user = Firebase.auth().currentUser;
     // console.log("UserData/" + user.uid + "/" + resortKey);

      var snoBroRef = this.getDBRef();

      Firebase.database().ref("UserData/" + user.uid + "/" + resortKey).set( resortKey );
      this.setItem( resortKey );
    }


   deleteResorts(resortKey) {
      var user = Firebase.auth().currentUser;
     //console.log("UserData/" + user.uid + "/" + resortKey);

      var snoBroRef = this.getDBRef();

      Firebase.database().ref("UserData/" + user.uid + "/" + resortKey).remove();

      this.setItem( resortKey );

    }

    getNewResorts()  {

      var user = Firebase.auth().currentUser;

      if(user) {

      var r_array = [];

      var snoBroRef = this.getDBRef();

      const resortsRef = snoBroRef.child('Resorts');
      
      const userRef = snoBroRef.child("UserData/" + user.uid);


      resortsRef.on('child_added', snap => {
        userRef.child(snap.key).on("value", function(snapshot) {
           
           if ( snapshot.exists() ) {
              //console.log(snapshot.key + " exists in userRef");
           }
          else{
            // console.log(snapshot.key + " is new for userRef");
            // console.log(snap.val());
             r_array.push( snap.val() );
            
          }
        });
      });

        //return r_array;
        this.resorts = r_array;
    }

  }
}