import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Bookingdata } from "./model/Bookingdata";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private registerurl = "http://localhost:3000/api/register";
  private loginurl = "http://localhost:3000/api/login";
  public bookurl = "http://localhost:3000/api/book";

  constructor(private http: HttpClient, private router: Router) {}

  registeruser(user: any) {
    return this.http.post<any>(this.registerurl, user);
  }
  loginuser(user: any) {
    return this.http.post<any>(this.loginurl, user);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  logoutUser() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  addbookdata(book: Bookingdata) {
    console.log("bookings ", book);

    return this.http.post<any>(this.bookurl, book);
  }
}
