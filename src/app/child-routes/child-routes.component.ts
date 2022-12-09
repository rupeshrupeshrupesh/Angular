import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-routes',
  templateUrl: './child-routes.component.html',
  styleUrls: ['./child-routes.component.css']
})
export class ChildRoutesComponent implements OnInit {

  constructor() { }

  @Input()
  parentdata="";

  ngOnInit(): void {
  }

}
