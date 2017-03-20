import { Component } from '@angular/core';
import { AddWorkoutPage } from '../add-workout/add-workout';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { WorkoutsPage } from "../workouts/workouts";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WorkoutsPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = AddWorkoutPage;
  constructor() {

  }
}
