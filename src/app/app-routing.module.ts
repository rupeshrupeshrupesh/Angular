import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth.guard";
import { BookTicketComponent } from "./book-ticket/book-ticket.component";
import { EventsComponent } from "./events/events.component";
import { HubComponent } from "./hub/hub.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SpecialComponent } from "./special/special.component";

const routes: Routes = [
  {
    path: "",
    // component:HubComponent
    redirectTo: "hub",
    pathMatch: "full",
  },
  { path: "events", component: EventsComponent, canActivate: [AuthGuard] },
  { path: "special", component: SpecialComponent, canActivate: [AuthGuard] },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "hub", component: HubComponent },
  { path: "book", component: BookTicketComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
