import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, tap, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorService} from "./error.service";
import {IPost} from "../models/post";

@Injectable({
  providedIn: 'root',
})
export class PostsService{
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService,
  ) {};

  users: IPost[] = [];

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${environment.apiUrl}/posts`).pipe(
      tap(users => this.users = users),
      catchError(this.errorHandler.bind(this)),
      retry(1),
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
