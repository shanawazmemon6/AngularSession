import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input()
  book: string;

  @Output()
  bookChange: EventEmitter<string> = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit(): void {
  }


  changeBookData($event) {
    this.bookChange.emit($event.target.value);
  }
}
