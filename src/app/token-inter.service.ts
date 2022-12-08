import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { NgIfContext } from "@angular/common";

@Injectable()
export class TokenInterService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: any, next: any) {
    let auth = this.injector.get(AuthService);
    let tokenzed = req.clone({
      setHeaders: {
        Authorization: ` bearer ${auth.getToken()}`,
      },
    });
    return next.handle(tokenzed);
  }
}
