import MobxFirebaseStore, {primitiveKey} from 'mobx-firebase-store';
import { ObservableMap, observable, action, computed, autorun } from 'mobx';
//import {observer} from 'mobx-react/native';

import Firebase from 'firebase';

const base = 'Resorts';

 export default class ResortStore extends MobxFirebaseStore {
   @observable resortData = "";

   constructor()
      {
        super(Firebase.database().ref());

        Firebase.auth().onAuthStateChanged((user) => {
           this.user = user;
         })

      }

      @action setItem(data) {
          this.resortData = data;
        }

  // Accessors
    getAll(){
       return this.getData(base);
     }

    subs()  {
      return [{
        subKey: 'Resorts',
        asList: true,
        forEachChild: {
          childSubs: (childKey, childVal) => {
            return [{
              subKey: 'userdata_'+childKey,
              asValue: true,
              path: 'Resorts/'+childKey,
            //  onData: (type, snapshot) => console.log('Data Changed!', type, 'UserData', snapshot.val() ),  //debugging line
              onData: (type, snapshot) => {
                      this.setItem(snapshot.val().friendlyname );
                      // console.log(this.weatherData + " is the new value")
                    },

            }]
          }
        },
        path: 'UserData/GNOzOY6bmCPP8r3IJQE3AOUceBC3'
      }];
     }
 }
