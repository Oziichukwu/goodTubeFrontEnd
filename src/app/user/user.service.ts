import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) { }

  subscribeToUser(userId:string) : Observable<boolean>{
    return this.HttpClient.post<boolean>("http://localhost:8080/api/user/subscribe/" + userId, null);
  }
}
