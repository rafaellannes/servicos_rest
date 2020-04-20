import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from './service​';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(private http: HttpClient, private storage: Storage) {
   
   }

  async get() {
  
    const token = await this.storage.get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<Service[]>('http://localhost:8000/api/services', httpOptions).toPromise();
  }

  getById(id: number) {
    return this.http.get<Service>(`http://localhost:8000/api/services/${id}`).toPromise();
  }

}
