import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SingleResult} from '../model/SingleResult';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../utils/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public signUp(user: User): Observable<SingleResult<User>> {
    return this.httpClient.post<SingleResult<User>>(Constants.signup, user);
  }
}
