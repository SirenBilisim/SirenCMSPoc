import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unvan } from "../../_models/_Unvan/unvan";
import { ROOT_URL } from "../../_models/config";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnvanService {
  unvansRef: Observable<Unvan[]>;
  unvanRef: Unvan;
  constructor(private http: HttpClient) {

  }

  GetUnvansList() {
    return this.http.get<Unvan[]>(ROOT_URL + '/UnvanServer?iDisplayLength=10');

  }

  AddUnvan(unvan: Unvan) {
    debugger;
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Adi: unvan.adi, ParafUnvan: unvan.parafUnvan
    }
    return this.http.post<Unvan>(ROOT_URL + '/UnvanServer', body, { headers });
  }

  GetUnvan(id: any) {
    return this.http.get<Unvan>(ROOT_URL + '/UnvanServer/' + id);
  }

  UpdateUnvan(unvan: Unvan) {  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
      Adi: unvan.adi, ParafUnvan: unvan.parafUnvan, ID: unvan.id
    }  
    return this.http.put<Unvan>(ROOT_URL + '/UnvanServer/' + unvan.id, body, { headers })  
  
  }  
  DeleteEmployee(unvan: Unvan) {  
    return this.http.delete<Unvan>(ROOT_URL + '/UnvanServer/' + unvan.id)  
  }   

}
