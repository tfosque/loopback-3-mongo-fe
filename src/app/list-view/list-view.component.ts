import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() data = new BehaviorSubject<any[]>([]);
  constructor() { }

  ngOnInit() {
    this.data.subscribe(results => {
      console.log(this.data);
    });
  }

}
