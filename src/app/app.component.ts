import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookData: any = 'No Books';

  displayBook($event: string) {
    this.bookData = $event;
  }

  clearBook() {
    this.bookData = null;
  }
}
