import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../event.service";
import { Bookingdata } from "../model/Bookingdata";
import { hub } from "../model/data";
import { SubjectServiceService } from "../subject-service.service";

@Component({
  selector: "app-special",
  templateUrl: "./special.component.html",
  styleUrls: ["./special.component.css"],
})
export class SpecialComponent implements OnInit {
  constructor(
    private even: EventService,
    private router: Router,
    private serve: SubjectServiceService
  ) {}

  special: any = [];
  bookdata: Bookingdata = new Bookingdata();
  bookingdata: hub = new hub();
  ngOnInit(): void {
    this.even.getspecial().subscribe(
      (res) => {
        this.special = res;
        // console.log(res);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(["/login"]);
          }
        }
      }
    );
    this.serve.bookticket.subscribe((res) => {
      console.log("i am in special ", res);

      this.bookdata = res;
    });
  }
}
