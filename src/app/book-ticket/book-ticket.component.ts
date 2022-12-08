import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { Router } from "@angular/router";
import { SubjectServiceService } from "../subject-service.service";
import { hub } from "../model/data";
import { AuthService } from "../auth.service";
import { Bookingdata } from "../model/Bookingdata";

@Component({
  selector: "app-book-ticket",
  templateUrl: "./book-ticket.component.html",
  styleUrls: ["./book-ticket.component.css"],
})
export class BookTicketComponent implements OnInit {
  @Input()
  public hubdata: any = [];

  constructor(
    private even: EventService,
    private router: Router,
    private serve: SubjectServiceService,
    private auth: AuthService
  ) {}
  moviearry: any = [];
  show: number = 1;
  // valuenew:any={
  //   Title: "",
  //   Year: "",
  //   Runtime: "",
  //   Poster:""

  // };
  MovieTime: any = [
    "9Am To 12Pm",
    "12Pm To 3Pm",
    "3Pm To 6Pm",
    "6Pm To 9Pm",
    "9Pm To 12Pm",
  ];

  MovieSeats: any = ["Golden", "Silver", "Balcony"];
  valuenew: hub;
  box: number = 0;
  moviname: string;
  bookdata: Bookingdata = new Bookingdata();

  selected: string;
  selectedCategory: string;

  ngOnInit(): void {
    this.selected = "time";
    this.even.gethub().subscribe(
      (res) => {
        console.log(res);
        console.log(this.hubdata);

        this.moviearry = res;
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(["/login"]);
          }
        }
      }
    );
    this.serve.eventname.subscribe((res) => {
      this.valuenew = res;
    });
  }
  availableMovie() {
    this.show = 1;
  }

  GetInformation(value: any) {
    this.show = 1;
    this.box = 1;
  }
  bookevent(value: hub) {
    let booking = new Bookingdata();
    booking.Title = value.Title;
    booking.seat = this.bookdata.seat;
    booking.time = this.bookdata.time;
    booking.Year = value.Year;
    booking.status = "completed";
    booking.isBooked = true;

    this.auth.addbookdata(booking).subscribe(
      (res) => {
        this.bookdata = res;
        this.serve.bookticket.next(this.bookdata);

        console.log("----------", this.bookdata);
      },
      (err) => console.log(err)
    );
  }
  onselected(value: string) {
    this.bookdata.time = value;
  }
  onselected1(value: string) {
    this.bookdata.seat = value;
  }
  setthedata(seatvalue: string) {
  }
}
