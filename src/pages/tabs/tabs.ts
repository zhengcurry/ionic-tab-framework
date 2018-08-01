import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {UserCenterPage} from "../user-center/user-center";
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UserCenterPage;

  constructor() {

  }
}
