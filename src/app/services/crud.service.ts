import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  base_url = environment.apiDelinea;

  constructor(
    private http: HttpClient
  ) { }

  setEndPoint(endpoint: string) {
    this.base_url = `${this.base_url}/${endpoint}`;
  }

  getAll() {
    return this.http.get<any>(`${this.base_url}/`);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.base_url}/${id}`);
  }

  store(store: any){
    return this.http.post<any>(`${this.base_url}/`, store);
  }

  update(update: any){
    return this.http.patch<any>(`${this.base_url}/${update.id}`, update);
  }

  delete(id: number){
    return this.http.delete<any>(`${this.base_url}/${id}/delete`);
  }
}
