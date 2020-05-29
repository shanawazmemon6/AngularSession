import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input()
  book:string

  constructor() { }

  ngOnInit(): void {
  }

}
