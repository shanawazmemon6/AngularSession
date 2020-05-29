import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputData

  inputKeyUp($event) {
    this.inputData=$event.target.value;
  }
}
