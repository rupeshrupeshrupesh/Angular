import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  // email: string;
  // password: string;
  registerUserData = {
    email: "",
    password: "",
  };
  constructor(private auth: AuthService, private router: Router) {}

  registeruser() {
    this.auth.registeruser(this.registerUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/login"]);
      },
      (err) => console.log(err)
    );
  }
}
