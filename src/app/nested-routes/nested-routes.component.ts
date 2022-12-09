import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nested-routes',
  templateUrl: './nested-routes.component.html',
  styleUrls: ['./nested-routes.component.css']
})
export class NestedRoutesComponent implements OnInit {

  constructor() { }

  @Output()
  m=new EventEmitter();

  ngOnInit(): void {

    this.m.emit("nested to app");
  }

}
