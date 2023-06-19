import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, tap} from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'https://jsonplaceholder.typicode.com/users';
  //private endpoint = 'itens';

  constructor(private http: HttpClient) { }

 public listar():Observable<Item[]>{
     //return this.http.get(`https://jsonplaceholder.typicode.com/users`);
     return this.http.get<Item[]>(`${this.baseURL}`)
        .pipe(delay(2000),
        tap(console.log));
  }
}


