import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-deq',
  templateUrl: './search-deq.component.html',
  styleUrls: ['./search-deq.component.css']
})
export class SearchDeqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredSearchValue: string='';

  @Output()
  searchTextChanged: EventEmitter<string>=new EventEmitter<string>();

  onSearchTextChanged(){
      this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
