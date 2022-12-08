import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../event.service";
import { Bookingdata } from "../model/Bookingdata";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"],
})
export class EventsComponent implements OnInit {
  // ev:any=[];
  bookdata: Bookingdata = new Bookingdata();
  show: number = 0;
  box: number = 0;
  nama: any = [];
  constructor(private even: EventService, private router: Router) {}

  ngOnInit(): void {
    this.even.getevents().subscribe(
      (res) => {
        // this.ev=res,
        console.log(res);
      },

      (err) => {
        // console.log(err)
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(["/login"]);
          }
        }
      }
    );
  }
  hidebutton() {
    this.show = 0;
    this.box = 0;
  }
  donebutton() {
    this.router.navigate(["/hub"]);
  }
  appcomponant() {
    this.router.navigate(["/special"]);
  }

  availableMovies() {
    this.even.gethub().subscribe(
      (res) => {
        this.nama = res;
        console.log("bok data---", this.nama);
        this.show = 0;
        this.box = 1;
      },
      (err) => console.log(err)
    );
  }
}
