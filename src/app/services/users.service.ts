import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IUser} from "../models/user";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root',
})
export class UsersService{
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService,
  ) {};

  users: IUser[] = [];

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${environment.apiUrl}/users`).pipe(
      tap(users => this.users = users),
      catchError(this.errorHandler.bind(this)),
      retry(1),
      // delay(1000) // uncomment for loading spinner test
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
