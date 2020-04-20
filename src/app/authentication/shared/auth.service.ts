import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Account } from './account';
import { Login } from './login';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: Storage) { }

  createAccount(account: Account) {
    return this.http.post('http://localhost:8000/api/register', account).toPromise()
  }

  login(login: Login) {
    return this.http.post('http://localhost:8000/api/login', login)
      .pipe(
        map((resp: any) => {
          const token = resp.success.token;
          return this.storage.set('token', token).finally(() => {
            return;
          });

        })
      ).toPromise();
  }

  getAuthorizationToken() {
    return from(this.storage.get('token'));
  }

  async isUserAuth(){
    const token = await this.storage.get('token');
    return token !== null;
  }

}
