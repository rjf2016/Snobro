import MobxFirebaseStore, {primitiveKey} from 'mobx-firebase-store';
import { ObservableMap, observable, action, computed, autorun } from 'mobx';


import Firebase from 'firebase';

const base = 'Weather'; 

 export default class WeatherStore extends MobxFirebaseStore {
   @observable weatherData = "";

   constructor()
      {
        super(Firebase.database().ref());

        Firebase.auth().onAuthStateChanged((user) => {
           this.user = user;
         })

      }
     @action setItem(data) {
          this.weatherData = data;
        }

  // Accessors
    getAll(){
     return this.getData(base);
     }

    subs()  {

      return [{
        subKey: 'Weather',
        asList: true,
        forEachChild: {
          childSubs: (childKey, childVal) => {
            return [{
              subKey: 'userdata_'+childKey,
              asValue: true,
              path: 'Weather/'+childKey,
              onData: (type, snapshot) => {
                       this.setItem(snapshot.val().resort );
                    },
            },
            {
              subKey: 'resortdata_'+childKey,
              asValue: true,
              path: 'Resorts/'+childKey,

              onData: (type, snapshot) => {
                      this.setItem(snapshot.val().resort );
                    },
            }

            ]
          }
        },
        //path: 'UserData/GNOzOY6bmCPP8r3IJQE3AOUceBC3'
        path: 'UserData/' + Firebase.auth().currentUser.uid
      }];
     }

 }
