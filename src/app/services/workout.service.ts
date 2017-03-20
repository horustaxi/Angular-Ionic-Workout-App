import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx'; //reactive extentions

@Injectable()
export class WorkoutService{
  http:any;
  apiKey:String;
  workoutsUrl:String;
//do not need to include Http module in applicationCache.module as we do in straight angular project

    constructor(http:Http){
      this.http = http;
      this.apiKey = 'MDU-1Q-osXy1GX98iWEVDCG64AIZhzZs'; 
      this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkout/collections/workouts_chesnowitz'; 

    }

    getWorkouts(){
            // https://api.mlab.com/api/1/databases/my-db/collections?apiKey=myAPIKey
      return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
        .map(resp => resp.json()); 
        //     return this.http.get("https://api.mlab.com/api/1/databases?apiKey=MDU-1Q-osXy1GX98iWEVDCG64AIZhzZs")
        // .map(resp => resp.json()); 
    }
}
