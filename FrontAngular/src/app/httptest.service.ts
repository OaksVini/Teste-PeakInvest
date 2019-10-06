import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

@Injectable()
export class HttpTestService {
  constructor(private _http : HttpClient) { }
    get(id: number){
      return this._http.get(`https://localhost:44356/api/consulta/${id}`, httpOptions);
    }

    post(valor: string, parcelas: number){
      return this._http.post(`https://localhost:44356/api/cadastro/?valor=${valor}&parcelas=${parcelas}`, httpOptions);
    }
}