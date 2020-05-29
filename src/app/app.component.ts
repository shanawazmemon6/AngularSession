import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookData: any="The Ramesh Book"

  clearBook() {
    this.bookData=null
  }
}
