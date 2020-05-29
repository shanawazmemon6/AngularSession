import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application';
  empJson= {
    'id': '1234',
    'name': 'Ramesh',
    'current': new Date(),
    'isOnline':true
  };

  listData = ['Ramesh', 'Suresh', 'Mahesh'];
  myCustom="blue";





}
