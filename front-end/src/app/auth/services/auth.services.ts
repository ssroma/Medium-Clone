import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { RegisterRequestInterface } from '../interfaces/register-request.inteface';
import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';
import { environment } from 'src/environments/environment.prod';
import { AuthResponseInterface } from '../interfaces/auth-respose.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private basePath: string;

  constructor(private http: HttpClient) {
    this.basePath = environment.base_api_url;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${this.basePath}/users/login`, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
