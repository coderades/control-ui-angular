import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  server_url = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(`${this.server_url}`);
  }

  public getUsers2() {
    return this.http.get(`${this.server_url}/user`);
  }
}
