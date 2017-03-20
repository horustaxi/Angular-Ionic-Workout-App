import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WorkoutService } from "../../app/services/workout.service";
import { WorkoutsPage } from "../workouts/workouts";


@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {
  public title: string;
  public type: string;
  public note: string;
  public result: any;

  constructor(public navCtrl: NavController, private workoutService:WorkoutService) {
   
  }

  onSubmit(){
     var workout = {
      title: this.title,
      type: this.type,
      note: this.note
    }
//  Add workout
  this.workoutService.addWorkout(workout).subscribe(data => { // gets added in workout service
    this.result = data;
  });

  this.navCtrl.push(WorkoutsPage);

  }

}
