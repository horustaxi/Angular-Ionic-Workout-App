import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutsPage } from "../pages/workouts/workouts";
import { AddWorkoutPage } from "../pages/add-workout/add-workout";
import { WorkoutDetailsPage } from "../pages/workout-details/workout-details";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    AddWorkoutPage, 
    WorkoutsPage,
    WorkoutDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage, 
    AddWorkoutPage,
    WorkoutsPage,
    WorkoutDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
