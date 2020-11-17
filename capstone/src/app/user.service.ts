import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:9090/users/alluse");
   }
}
