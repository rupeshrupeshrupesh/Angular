import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterService } from './token-inter.service';
import { HubComponent } from './hub/hub.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { SubjectServiceService } from './subject-service.service';
import { AngularLifeComponent } from './angular-life/angular-life.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { NestedRoutesComponent } from './nested-routes/nested-routes.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    EventsComponent,
    SpecialComponent,
    LoginComponent,
    RegisterComponent,
    HubComponent,
    BookTicketComponent,
    AngularLifeComponent,
    LazyLoadingComponent,
    ChildRoutesComponent,
    NestedRoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [AuthService,SubjectServiceService,AuthGuard, EventService,
    {
      provide:HTTP_INTERCEPTORS,
     useClass: TokenInterService,
     multi:true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
