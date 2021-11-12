import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  alterSenha(dados) {
    return this.http.put<any>(`${environment.apiAuth}/alter-password`, dados);
  }
  
}
