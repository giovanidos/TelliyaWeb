import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent implements OnInit {

  lists = [
    {'icon': '🇲🇱','title': 'Mali','subtitle':'+223','id': 1},
    {'icon': '🇲🇱','title': 'Mali','subtitle':'+223','id': 2},
    {'icon': '🇲🇱','title': 'Mali','subtitle':'+223','id': 3},
    {'icon': '🇲🇱','title': 'Mali','subtitle':'+223','id': 4},
    {'icon': '🇲🇱','title': 'Mali','subtitle':'+223','id': 5},

  ]

  constructor() { }

  ngOnInit() {
  }

}
