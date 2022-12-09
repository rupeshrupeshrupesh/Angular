import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularLifeComponent } from "./angular-life/angular-life.component";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth.guard";
import { BookTicketComponent } from "./book-ticket/book-ticket.component";
import { ChildRoutesComponent } from "./child-routes/child-routes.component";
import { EventsComponent } from "./events/events.component";
import { HubComponent } from "./hub/hub.component";
import { LazyLoadingComponent } from "./lazy-loading/lazy-loading.component";
import { LoginComponent } from "./login/login.component";
import { NestedRoutesComponent } from "./nested-routes/nested-routes.component";
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
  {path:"angular",component:AngularLifeComponent,

  children:[
    {path:"",component:ChildRoutesComponent},
    {path:"nest",component:NestedRoutesComponent}
  ]

},
  {
    path:"lazy",component:LazyLoadingComponent,
    data:{ page:1,search:"lela"}
  },

  { path: "login", component: LoginComponent ,

},
  { path: "register", component: RegisterComponent },
  { path: "hub", component: HubComponent },
  { path: "book", component: BookTicketComponent, canActivate: [AuthGuard] },
  {path:"child",component:ChildRoutesComponent},
  {path:"nest",component:NestedRoutesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
