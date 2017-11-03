import firebase from 'firebase';

 //const base = 'history';
 import {firebaseApp} from '../components/base';

 class WeatherStore {

   constructor()
   {
      firebaseApp.auth().onAuthStateChanged((user) => {
        this.user = user;
      })

      this.state = {
         weatherList: null   //holds the full list of resorts + temp + current weather (landing page list)
      }
      this.getAll();
    //  this.getWeeklyForecast();
   }

   getRef() {
       return firebaseApp.database().ref();
     }


   // Accessors
  getAll()
   {
     var x = 1;
     var resortsArray = [];
     var forecast = [];
     var d1_temp = null, d2_temp = null, d3_temp = null;
     var d1_weather, d2_weather, d3_weather;

     this.resortsRef = this.getRef().child('Resorts');

     this.resortsRef.once('value', (snap) => {
       var items = [];
       snap.forEach((child) => {
         var d = child.val();
         var o = new Object();
         var p = new Object();
         var i = new Object();  //iconFont
         o.key = x;
         o.resort = d.resort;
         o.time = d.r_weatherdate;
         o.place = d.friendlyname;
         o.openTrails = d.r_trailsopen;
         o.openLifts = d.r_liftsopen;
         o.surfaceConditions = d.r_surface;
         o.currentTemp = d.r_temp;
         o.description = d.r_weather;
        //  i.iconName = 'ios-sunny-outline';
         i.iconName = this.getWeatherIcons(d.r_weather).iconName
         i.iconFont = 'ionicon';
         i.iconColor = '#464646';
         o.icon = i;
         o.weeklyForecast = null;
        //use this data to get the weekly forecast for each item in Resorts (weatherlist)
        this.weatherRef = this.getRef().child("Weather/" + d.resort);

        this.weatherRef.once('value', (snappy) => {
            var y=1;
            var v = snappy.val();

             p.key = y;
             p.day = v.weather_date;
             p.place = v.resort;
             p.temp = v.temp;
             p.description = v.description;


             p.forecast = [
               { key: 1, temp: v.day1_temp, weather: v.day1_weather, iconName: this.getWeatherIcons(v.day1_weather).iconName, iconFont: this.getWeatherIcons(v.day1_weather).iconFont, iconColor: this.getWeatherIcons(v.day1_weather).iconColor },
               { key: 2, temp: v.day2_temp, weather: v.day2_weather, iconName: this.getWeatherIcons(v.day2_weather).iconName, iconFont: this.getWeatherIcons(v.day2_weather).iconFont, iconColor: this.getWeatherIcons(v.day2_weather).iconColor },
               { key: 3, temp: v.day3_temp, weather: v.day3_weather, iconName: this.getWeatherIcons(v.day3_weather).iconName, iconFont: this.getWeatherIcons(v.day3_weather).iconFont, iconColor: this.getWeatherIcons(v.day3_weather).iconColor }
             ];

             p.currentTemp = v.temp;
             p.temp_hi = v.temp_hi;
             p.temp_lo = v.temp_lo;
             y++;
         });  //end itemsRef.on

         o.weeklyForecast = p;  // assign the weather data

         resortsArray.push(o);

         x++;
       });

     });  //end itemsRef.on

   console.log(resortsArray);
    this.state.weatherList = resortsArray;
    return resortsArray;
   }


getWeatherIcons(weatherConditions){
    if(weatherConditions=="Snow")
      return {iconName: 'ios-snow-outline', iconFont: 'ionicon', iconColor: 'skyblue'}
    if(weatherConditions=="Rain")
      return {iconName: 'ios-rainy-outline', iconFont: 'ionicon', iconColor: 'darkgrey'}
    if(weatherConditions=="Cloudy")
      return {iconName: 'ios-cloudy-outline', iconFont: 'ionicon', iconColor: 'darkgrey'}
    if(weatherConditions=="Partly Sunny")
      return {iconName: 'ios-partly-sunny-outline', iconFont: 'ionicon', iconColor: '#FFCF17'}

      return {iconName: 'ios-sunny-outline', iconFont: 'ionicon', iconColor: '#FFCF17'}

}
//for drilldown into ResortDetail
getResort(resortName){

}
// Ultimately, we will call Rick's API for the 3 or 5-day outlook, hardcoded for now
// this would take in a parameter (resort name or location) and retrieve the weather outlook
   getWeeklyForecast(){

     var x = 1;
     var weatherArray = [];

     this.weatherRef.on('value', (snap) => {
       var o = Object();
       // get children as an array
       //var items = [];
       snap.forEach((child) => {
         var d = child.val();
         //console.log(d);
         var o = new Object();
         var i = new Object();  //iconFont
         o.key = x;
         o.day = d.weather_date;
         o.place = d.resort;
         o.temp = d.temp;
         o.description = d.description;
         o.day1_temp = d.day1_temp;
         o.day1_weather = d.day1_weather;
         o.day2_temp = d.day2_temp;
         o.day2_weather = d.day2_weather;
         o.day3_temp = d.day3_temp;
         o.day3_weather = d.day3_weather;
         o.currentTemp = d.temp;
         o.temp_hi = d.temp_hi;
         o.temp_lo = d.temp_lo;

         weatherArray.push(o)
         x++;
       });

     });  //end itemsRef.on

     console.log(weatherArray);
     this.state.weeklyForecast = weatherArray;
     return weatherArray;
   }

   addNew(key, liked)
   {
    //  let uid = this.user.uid;
    //  console.log('uid: ', uid);
    //  let updates = {}
    //  updates[key] = liked;
    //  this.fb.child(base).child(uid).update(updates);
   }

   del(key){

   }

 }
 export default WeatherStore;
